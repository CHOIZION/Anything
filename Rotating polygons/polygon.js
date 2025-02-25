const PI2 = Math.PI * 2;

const COLORS = [
  "#4b45ab", // 색상 배열
  "#554fb8",
  "#605ac7",
  "#2a91a8",
  "#2e9ab2",
  "#32a5bf",
  "#81b144",
  "#85b944",
  "#8fc549",
  "#e0af27",
  "#eeba2a",
  "#fec72e",
  "#bf342d",
  "#ca3931",
  "#d7423a",
];

export class Polygon {
  constructor(x, y, radius, sides) {
    this.x = x; // 중심 x
    this.y = y; // 중심 y
    this.radius = radius; // 반지름
    this.sides = sides; // 변의 수
    this.rotate = 0; // 회전 각도
  }

  animate(ctx, moveX) {
    ctx.save(); // 상태 저장

    const angle = PI2 / this.sides; // 내각 계산
    const angle2 = PI2 / 4; // 사각형을 그리기 위한 각

    ctx.translate(this.x, this.y); // 중심으로 이동

    this.rotate += moveX * 0.008; // 마우스 움직임에 따라 회전
    ctx.rotate(this.rotate); // 회전 적용

    for (let i = 0; i < this.sides; i++) { // 변의 수만큼 반복
      const x = this.radius * Math.cos(angle * i); // x 위치 계산
      const y = this.radius * Math.sin(angle * i); // y 위치 계산

      ctx.save(); // 상태 저장
      ctx.fillStyle = COLORS[i % COLORS.length]; // 색상 설정
      ctx.translate(x, y); // 변의 위치로 이동
      ctx.rotate((((360 / this.sides) * i + 45) * Math.PI) / 180); // 각도에 맞춰 회전
      ctx.beginPath();
      for (let j = 0; j < 4; j++) { // 사각형 그리기
        const x2 = 160 * Math.cos(angle2 * j); // x2 위치 계산
        const y2 = 160 * Math.sin(angle2 * j); // y2 위치 계산
        j == 0 ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
      }
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }
    ctx.restore(); // 상태 복원
  }
}
