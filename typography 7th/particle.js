const FRICTION = 0.98; // 마찰 계수, 속도 감소에 사용
const MOVE_SPEED = 0.88; // 원래 위치로 돌아가는 속도

export class Particle {
  constructor(pos, color) {
    this.color = color; // 파티클 색상
    this.maxRadius = Math.random() * (50 - 20) + 20; // 최대 반지름 랜덤 설정

    this.savedX = pos.x; // 초기 x 위치 저장
    this.savedY = pos.y; // 초기 y 위치 저장
    this.x = pos.x; // 현재 x 위치
    this.y = pos.y; // 현재 y 위치

    this.progress = 0; // 애니메이션 진행률
    this.radius = 2; // 시작 반지름
    this.vr = 0; // 반지름 변화 속도
    this.vx = 0; // x축 이동 속도
    this.vy = 0; // y축 이동 속도

    this.fps = 30; // 프레임 레이트
    this.fpsTime = 1000 / this.fps; // 프레임당 시간
  }

  draw(ctx) {
    if (this.progress < 100) {
      // 애니메이션 진행 중 반지름 증가
      this.vr += (this.maxRadius - this.radius) / this.fpsTime;
      this.vr *= MOVE_SPEED; // MOVE_SPEED를 적용하여 속도 조절
    } else {
      // 진행률 100% 이후 반지름 감소
      this.vr -= 2;
    }

    this.progress += 1; // 진행률 업데이트

    this.radius += this.vr; // 반지름에 속도 적용

    // 원래 위치로 서서히 이동
    this.x += (this.savedX - this.x) * MOVE_SPEED;
    this.y += (this.savedY - this.y) * MOVE_SPEED;

    // 마찰을 적용한 속도 감소
    this.vx *= FRICTION;
    this.vy *= FRICTION;

    // 속도를 위치에 적용
    this.x += this.vx;
    this.y += this.vy;

    // 반지름이 1 이상일 때만 그리기
    if (this.radius > 1) {
      // 그라데이션 생성
      const g = ctx.createRadialGradient(
        this.x,
        this.y,
        this.radius / 2,
        this.x,
        this.y,
        this.radius
      );
      g.addColorStop(0, this.color); // 중심 색상
      g.addColorStop(1, "rgba(0, 0, 0, 0)"); // 바깥 색상

      // 원 그리기
      ctx.beginPath();
      ctx.fillStyle = g;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    }
  }
}
