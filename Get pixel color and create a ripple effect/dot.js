const PI2 = Math.PI * 2;
const BOUNCE = 0.82;

export class Dot {
  constructor(x, y, radius, pixelSize, red, green, blue) {
    this.x = x; // 위치 x
    this.y = y; // 위치 y
    this.targetRadius = radius; // 목표 반지름
    this.radius = 0; // 현재 반지름
    this.radiusV = 0; // 반지름 변화량
    this.pixelSize = pixelSize; // 픽셀 크기
    this.pixelSizeHalf = pixelSize / 2; // 픽셀 크기의 절반
    this.red = red; // 빨간색 값
    this.green = green; // 초록색 값
    this.blue = blue; // 파란색 값
  }

  animate(ctx) {
    // 픽셀 배경 그리기
    ctx.beginPath();
    ctx.fillStyle = "#000"; // 배경색 검정
    ctx.fillRect(
      this.x - this.pixelSizeHalf,
      this.y - this.pixelSizeHalf,
      this.pixelSize,
      this.pixelSize
    );

    // 반지름 계산
    const accel = (this.targetRadius - this.radius) / 2;
    this.radiusV += accel; // 가속도 적용
    this.radiusV *= BOUNCE; // 반동 적용
    this.radius += this.radiusV; // 반지름 업데이트

    // 도트 그리기
    ctx.beginPath();
    ctx.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`; // 색상 설정
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false); // 원 그리기
    ctx.fill();
  }

  reset() {
    this.radius = 0; // 반지름 초기화
    this.radiusV = 0; // 반지름 변화량 초기화
  }
}
