export class Point {
  constructor(x, y) {
    this.x = x || 0; // x 위치, 기본값 0
    this.y = y || 0; // y 위치, 기본값 0
  }

  add(point) {
    // 다른 점을 더함
    this.x += point.x;
    this.y += point.y;
    return this; // 연산 후 객체 반환
  }

  subtract(point) {
    // 다른 점을 뺌
    this.x -= point.x;
    this.y -= point.y;
    return this; // 연산 후 객체 반환
  }

  reduce(value) {
    // 값으로 나눔 (축소)
    this.x *= value;
    this.y *= value;
    return this; // 연산 후 객체 반환
  }

  collide(point, width, height) {
    // 다른 점과 충돌 확인 (너비, 높이 주어진 사각형 내에 있는지)
    return (
      this.x >= point.x &&
      this.x <= point.x + width &&
      this.y >= point.y &&
      this.y < point.y + height
    );
  }

  clone() {
    // 현재 점 복제
    return new Point(this.x, this.y);
  }
}
