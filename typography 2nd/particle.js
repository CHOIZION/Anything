const FRICTION = 0.98; // 마찰 계수, 속도 감소에 사용
const COLOR_SPEED = 0.12; // 색상 변화 속도, 색상을 원래대로 돌리는 속도
const MOVE_SPEED = 0.88; // 이동 속도, 원래 위치로 돌아가는 데 사용되는 속도

export class Particle {
  constructor(pos, texture) {
    this.sprite = new PIXI.Sprite(texture); // PIXI 스프라이트 생성, 텍스처 사용
    this.sprite.scale.set(0.06); // 스프라이트 크기 조정

    this.savedX = pos.x; // 초기 x 위치 저장
    this.savedY = pos.y; // 초기 y 위치 저장
    this.x = pos.x; // 현재 x 위치
    this.y = pos.y; // 현재 y 위치
    this.sprite.x = this.x; // 스프라이트의 x 위치 설정
    this.sprite.y = this.y; // 스프라이트의 y 위치 설정
    this.vx = 0; // x축 속도 초기화
    this.vy = 0; // y축 속도 초기화
    this.radius = 10; // 파티클의 반지름

    this.savedRgb = 0xf3316e; // 초기 색상 저장
    this.rgb = 0xf3316e; // 현재 색상
  }

  collide() {
    this.rgb = 0x451966; // 충돌 시 색상 변경
  }

  draw() {
    this.rgb += (this.savedRgb - this.rgb) * COLOR_SPEED; // 색상을 점진적으로 원래대로 변경

    this.x += (this.savedX - this.x) * MOVE_SPEED; // 원래 위치로 천천히 이동
    this.y += (this.savedY - this.y) * MOVE_SPEED; // 원래 위치로 천천히 이동

    this.vx *= FRICTION; // 마찰로 인한 x축 속도 감소
    this.vy *= FRICTION; // 마찰로 인한 y축 속도 감소

    this.x += this.vx; // x축 속도 적용
    this.y += this.vy; // y축 속도 적용

    this.sprite.x = this.x; // 스프라이트 위치 업데이트
    this.sprite.y = this.y; // 스프라이트 위치 업데이트
    this.sprite.tint = this.rgb; // 스프라이트 색상 변경
  }
}
