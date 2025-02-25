export class Block {
  constructor(width, height, x, y) {
    this.width = width; // 블록 너비
    this.height = height; // 블록 높이
    this.x = x; // 시작 x 좌표
    this.y = y; // 시작 y 좌표
    this.maxX = x + width; // 최대 x 좌표
    this.maxY = y + height; // 최대 y 좌표
  }

  draw(ctx) {
    const xGap = 80; // 그림자 x 방향 간격
    const yGap = 60; // 그림자 y 방향 간격

    // 블록 본체 그리기
    ctx.fillStyle = "#ff384e"; // 본체 색
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height); // 렉탱글
    ctx.fill();

    // 아래쪽 그림자
    ctx.fillStyle = "#190f3a"; // 그림자 색
    ctx.beginPath();
    ctx.moveTo(this.maxX, this.maxY);
    ctx.lineTo(this.maxX - xGap, this.maxY + yGap); // 그림자 오른쪽 선
    ctx.lineTo(this.x - xGap, this.maxY + yGap); // 그림자 아래쪽 선
    ctx.lineTo(this.x, this.maxY); // 그림자 왼쪽 선
    ctx.fill();

    // 옆면 그림자
    ctx.fillStyle = "#9d0919"; // 옆면 색
    ctx.beginPath();
    ctx.moveTo(this.x, this.y); // 위쪽 시작점
    ctx.lineTo(this.x, this.maxY); // 아래쪽으로 선
    ctx.lineTo(this.x - xGap, this.maxY + yGap); // 오른쪽 아래 대각선
    ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height); // 위로 선
    ctx.fill();
  }
}
