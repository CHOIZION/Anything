const PI2 = Math.PI * 2;

export class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius; // 공의 반지름
    this.vx = speed; // x축 이동 속도
    this.vy = speed; // y축 이동 속도
    this.x = stageWidth / 2; // 초기 x 위치, 스테이지 중앙
    this.y = stageHeight / 2; // 초기 y 위치, 스테이지 중앙
  }

  animate(ctx, stageWidth, stageHeight) {
    this.x += this.vx; // x 위치 업데이트
    this.y += this.vy; // y 위치 업데이트

    // 공이 화면 경계에 닿으면 반사
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1; // x축 반사
    }

    if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1; // y축 반사
    }

    // 공 그리기
    ctx.fillStyle = "#ffdd1c"; // 공 색상 설정
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, PI2); // 원 그리기
    ctx.fill(); // 채우기
  }
}
