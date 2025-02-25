import { Point } from "./point.js";

export class Wave {
  constructor(index, totalPoints, color) {
    this.index = index; // 파도의 인덱스
    this.totalPoints = totalPoints; // 파도를 구성하는 점의 총 수
    this.color = color; // 파도의 색상
    this.points = []; // 파도를 구성하는 점들의 배열
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth; // 스테이지 너비
    this.stageHeight = stageHeight; // 스테이지 높이

    this.centerX = stageWidth / 2; // 스테이지 중앙 X 좌표
    this.centerY = stageHeight / 2; // 스테이지 중앙 Y 좌표

    this.pointGap = this.stageWidth / (this.totalPoints - 1); // 점들 사이의 간격

    this.init(); // 초기화 함수 호출
  }

  init() {
    this.points = []; // 점들을 담을 배열 초기화

    for (let i = 0; i < this.totalPoints; i++) {
      // 전체 점 수만큼 반복하여 점 생성
      const point = new Point(
        this.index + i, // 각 점에 인덱스 할당
        this.pointGap * i, // X 좌표는 간격에 따라 결정
        this.centerY // 모든 점의 Y 좌표는 스테이지 중앙 Y로 설정
      );
      this.points[i] = point;
    }
  }

  draw(ctx) {
    ctx.beginPath(); // 경로 시작
    ctx.fillStyle = this.color; // 채울 색상 설정

    let prevX = this.points[0].x; // 첫 번째 점의 X 좌표
    let prevY = this.points[0].y; // 첫 번째 점의 Y 좌표

    ctx.moveTo(prevX, prevY); // 시작 점으로 이동

    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update(); // 중간 점들에 대해 업데이트
      }

      const cx = (prevX + this.points[i].x) / 2; // 이전 점과 현재 점 사이의 중간 X 좌표
      const cy = (prevY + this.points[i].y) / 2; // 이전 점과 현재 점 사이의 중간 Y 좌표

      ctx.quadraticCurveTo(prevX, prevY, cx, cy); // 이전 점에서 현재 점 사이를 곡선으로 연결

      prevX = this.points[i].x; // 현재 점의 X 좌표를 이전 점의 X 좌표로 설정
      prevY = this.points[i].y; // 현재 점의 Y 좌표를 이전 점의 Y 좌표로 설정
    }

    // 파도를 마무리하고, 스테이지 아래쪽으로 선을 그어 채움
    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();
  }
}
