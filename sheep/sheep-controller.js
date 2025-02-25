import { Sheep } from "./sheep.js";

export class SheepController {
  constructor() {
    this.img = new Image(); // 양 이미지
    this.img.onload = () => {
      this.loaded(); // 이미지 로드 완료시 실행
    };
    this.img.src = "sheep.png"; // 이미지 소스

    this.items = []; // 양 객체 배열

    this.cur = 0; // 프레임 카운트
    this.isLoaded = false; // 이미지 로드 여부
  }

  resize(stageWidth, stageHeight) {
    // 무대 크기 조정
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  loaded() {
    // 이미지 로드 완료 처리
    this.isLoaded = true;
    this.addSheep(); // 양 추가
  }

  addSheep() {
    // 양 추가
    this.items.push(new Sheep(this.img, this.stageWidth));
  }

  draw(ctx, t, dots) {
    // 양 그리기
    if (this.isLoaded) {
      this.cur += 1; // 프레임 카운트 증가

      if (this.cur > 200) {
        this.cur = 0;
        this.addSheep(); // 200 프레임마다 양 추가
      }

      for (let i = this.items.length - 1; i >= 0; i--) {
        const item = this.items[i];
        if (item.x < -item.width) {
          // 화면 밖으로 나간 양 제거
          this.items.splice(i, 1);
        } else {
          // 양 그리기
          item.draw(ctx, t, dots);
        }
      }
    }
  }
}
