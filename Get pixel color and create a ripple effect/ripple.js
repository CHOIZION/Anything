import { distance } from "./utils.js";

export class Ripple {
  constructor() {
    this.x = 0; // 파동 중심 x 좌표
    this.y = 0; // 파동 중심 y 좌표
    this.radius = 0; // 현재 반지름
    this.maxRadius = 0; // 최대 반지름
    this.speed = 10; // 확산 속도
  }

  resize(stageWidth, stageHeight) {
    // 화면 크기 조정시 호출
    this.stageWidth = stageWidth; // 무대 너비
    this.stageHeight = stageHeight; // 무대 높이
  }

  start(x, y) {
    // 파동 시작 위치와 최대 반지름 설정
    this.x = x; // 시작 x
    this.y = y; // 시작 y
    this.radius = 0; // 반지름 초기화
    this.maxRadius = this.getMax(x, y); // 최대 반지름 계산
  }

  animate() {
    // 반지름이 최대 반지름보다 작으면 확산
    if (this.radius < this.maxRadius) {
      this.radius += this.speed; // 반지름 확장
    }
  }

  getMax(x, y) {
    // 최대 반지름 계산
    const c1 = distance(0, 0, x, y); // 왼쪽 상단 모서리에서의 거리
    const c2 = distance(this.stageWidth, 0, x, y); // 오른쪽 상단 모서리에서의 거리
    const c3 = distance(0, this.stageHeight, x, y); // 왼쪽 하단 모서리에서의 거리
    const c4 = distance(this.stageWidth, this.stageHeight, x, y); // 오른쪽 하단 모서리에서의 거리
    return Math.max(c1, c2, c3, c4); // 가장 먼 거리 반환
  }
}
