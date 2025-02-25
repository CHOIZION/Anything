const PI2 = Math.PI * 2;

export class GlowParticle {
  constructor(x, y, radius, rgb) {
    this.x = x; // 위치 x
    this.y = y; // 위치 y
    this.radius = radius; // 반지름
    this.rgb = rgb; // 색상

    this.vx = Math.random() * 4; // x축 속도
    this.vy = Math.random() * 4; // y축 속도

    this.sinValue = Math.random(); // 반짝임을 위한 사인 값
  }

  animate(ctx, stageWidth, stageHeight) {
    this.sinValue += 0.01; // 반짝임 업데이트

    this.radius += Math.sin(this.sinValue); // 반지름 변화로 반짝임 효과

    this.x += this.vx; // 속도에 따른 x 이동
    this.y += this.vy; // 속도에 따른 y 이동

    // 경계에 닿으면 튕김 처리
    if (this.x < 0) {
      this.vx *= -1;
      this.x += 10;
    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 10;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y -= 10;
    }

    // 그라디언트로 광휘 효과
    ctx.beginPath();
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.01,
      this.x,
      this.y,
      this.radius
    );
    g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`); // 중심 색상
    g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`); // 바깥 색상
    ctx.fillStyle = g;
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    ctx.fill();
  }
}
