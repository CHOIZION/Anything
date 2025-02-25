const FRICTION = 0.98; // 마찰 계수, 속도 감소에 사용
const MOVE_SPEED = 0.88; // 원래 위치로 이동하는 속도

export class Particle {
  constructor(pos, color) {
    this.color = color; // 파티클의 색상
    this.maxRadius = Math.random() * (50 - 20) + 20; // 최대 반지름, 20에서 50 사이의 랜덤 값

    this.savedX = pos.x; // 초기 x 위치
    this.savedY = pos.y; // 초기 y 위치
    this.x = pos.x; // 현재 x 위치
    this.y = pos.y; // 현재 y 위치

    this.progress = 0; // 애니메이션 진행률
    this.radius = 2; // 현재 반지름
    this.vr = 0; // 반지름 변화 속도
    this.vx = 0; // x축 속도
    this.vy = 0; // y축 속도

    this.fps = 30; // 프레임레이트
    this.fpsTime = 1000 / this.fps; // 프레임 당 시간
  }

  draw(ctx) {
    if (this.progress < 100) {
      // 진행률이 100 미만이면 반지름 증가
      this.vr += (this.maxRadius - this.radius) / this.fpsTime;
      this.vr *= MOVE_SPEED; // MOVE_SPEED에 따라 속도 조절
    } else {
      // 진행률이 100 이상이면 반지름 감소
      this.vr -= 2;
    }

    this.progress += 1; // 진행률 업데이트

    this.radius += this.vr; // 반지름 업데이트

    // 원래 위치로 천천히 이동
    this.x += (this.savedX - this.x) * MOVE_SPEED;
    this.y += (this.savedY - this.y) * MOVE_SPEED;

    // 마찰로 인해 속도 감소
    this.vx *= FRICTION;
    this.vy *= FRICTION;

    this.x += this.vx; // 속도에 따라 위치 업데이트
    this.y += this.vy; // 속도에 따라 위치 업데이트

    if (this.radius > 1) {
      // 반지름이 1보다 클 때만 그리기
      const g = ctx.createRadialGradient(
        this.x,
        this.y,
        this.radius / 2,
        this.x,
        this.y,
        this.radius
      );
      g.addColorStop(0, this.color); // 중심 색상
      g.addColorStop(1, "rgba(0, 0, 0, 0)"); // 바깥 색상 (투명)

      ctx.beginPath();
      ctx.fillStyle = g; // 그라데이션 적용
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill(); // 원 그리기
    }
  }
}
