export class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius; // 공의 반지름
    this.vx = speed; // x축 속도
    this.vy = speed; // y축 속도

    const diameter = radius * 2;
    // 공의 초기 위치 랜덤 설정. 경계 안에 있게
    this.x = this.radius + Math.random() * (stageWidth - diameter);
    this.y = this.radius + Math.random() * (stageHeight - diameter);
  }

  draw(ctx, stageWidth, stageHeight, block) {
    // 속도 만큼 위치 이동
    this.x += this.vx;
    this.y += this.vy;

    // 창 경계에 닿으면 튕김
    this.bounceWindow(stageWidth, stageHeight);

    // 블록에 닿으면 튕김
    this.bounceBlock(block);

    // 공 그리기
    ctx.fillStyle = "#fdd700"; // 공 색상
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // 원 그리기
    ctx.fill(); // 채우기
  }

  bounceWindow(stageWidth, stageHeight) {
    // 창 경계
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    // 경계에 닿으면 반대 방향으로 튕김
    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }

  bounceBlock(block) {
    // 블록 경계
    const minX = block.x - this.radius;
    const maxX = block.maxX + this.radius;
    const minY = block.y - this.radius;
    const maxY = block.maxY + this.radius;

    // 블록과 충돌하면 반대 방향으로 튕김
    if (this.x > minX && this.x < maxX && this.y > minY && this.y < maxY) {
      // 가장 가까운 경계까지의 거리 계산
      const x1 = Math.abs(minX - this.x);
      const x2 = Math.abs(maxX - this.x);
      const y1 = Math.abs(minY - this.y);
      const y2 = Math.abs(maxY - this.y);
      const min1 = Math.min(x1, x2);
      const min2 = Math.min(y1, y2);
      const min = Math.min(min1, min2);

      // 해당 경계에 닿으면 반대 방향으로 튕김
      if (min == min1) {
        this.vx *= -1;
        this.x += this.vx;
      } else if (min == min2) {
        this.vy *= -1;
        this.y += this.vy;
      }
    }
  }
}
