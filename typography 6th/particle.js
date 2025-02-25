import { hslToHex } from "./utils.js"; // HSL을 HEX 색상 코드로 변환하는 함수를 가져옴

export class Particle {
  constructor(pos, groupRatio, indexRatio, texture) {
    this.sprite = new PIXI.Sprite(texture); // PIXI 스프라이트 객체 생성, 텍스처를 인자로 받음
    const minScale = 0.3; // 스프라이트의 최소 스케일
    const maxScale = 0.6; // 스프라이트의 최대 스케일
    const scale = (maxScale - minScale) * indexRatio + minScale; // 인덱스 비율에 따라 스케일 계산
    this.sprite.scale.set(scale); // 계산된 스케일로 스프라이트 크기 설정

    const minLight = 60; // 최소 밝기 값
    const maxLight = 40; // 최대 밝기 값
    const light = (maxLight - minLight) * indexRatio + minLight; // 인덱스 비율에 따른 밝기 계산

    const minHue = 280; // 최소 색조 값
    const maxHue = 330; // 최대 색조 값
    const hue = (maxHue - minHue) * groupRatio + minHue; // 그룹 비율에 따른 색조 계산

    this.sprite.tint = hslToHex(hue, 84, light); // 계산된 색상을 HEX로 변환하여 스프라이트에 적용

    this.x = pos.x; // 파티클의 x 위치
    this.y = pos.y; // 파티클의 y 위치
    this.sprite.x = this.x; // 스프라이트의 x 위치 설정
    this.sprite.y = this.y; // 스프라이트의 y 위치 설정

    this.vx = 0; // x축 이동 속도 초기화
    this.vy = 0; // y축 이동 속도 초기화
  }

  animate(index, total) {
    if (index < total) {
      this.x += this.vx; // x축 이동 속도에 따른 위치 업데이트
      this.y += this.vy; // y축 이동 속도에 따른 위치 업데이트
    }

    this.sprite.x = this.x; // 스프라이트의 x 위치 업데이트
    this.sprite.y = this.y; // 스프라이트의 y 위치 업데이트
  }
}
