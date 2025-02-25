const TOTAL = 12; // 총 포인트 수

export class Particle {
  constructor(pos, color, ctx) {
    this.color = color; // 파티클의 색상

    const ranMax = 20; // 랜덤한 이동 범위의 최대값
    this.points = [{ x: pos.x, y: pos.y }]; // 시작 위치를 포함하는 포인트 배열 초기화

    // 다음 포인트들을 생성하여 배열에 추가
    for (let i = 1; i < TOTAL; i++) {
      const prev = this.points[i - 1]; // 이전 포인트 가져오기
      this.points.push(this.setRandom(prev, ranMax)); // 이전 포인트 기준으로 랜덤한 위치에 새 포인트 설정
    }

    this.draw(ctx); // 생성된 포인트들을 이용해 그리기
  }

  draw(ctx) {
    ctx.beginPath(); // 경로 생성 시작
    ctx.lineWidth = 0.3; // 선의 굵기 설정
    ctx.strokeStyle = this.color; // 선의 색상 설정
    ctx.moveTo(this.points[0].x, this.points[0].y); // 시작점으로 이동

    // 모든 포인트를 순회하며 이전 포인트와 현재 포인트 사이에 곡선 그리기
    for (let i = 1; i < this.points.length; i++) {
      const prev = this.points[i - 1]; // 이전 포인트
      const cur = this.points[i]; // 현재 포인트
      const cx = (prev.x + cur.x) / 2; // 중간 x 좌표 계산
      const cy = (prev.y + cur.y) / 2; // 중간 y 좌표 계산
      ctx.quadraticCurveTo(prev.x, prev.y, cx, cy); // 이전 포인트에서 현재 포인트 사이의 중간점을 통해 곡선 그리기
    }

    ctx.stroke(); // 경로에 선 그리기
  }

  setRandom(pos, gap) {
    // 이전 포인트를 기준으로 랜덤한 위치의 새 포인트 반환
    return {
      x: pos.x + (Math.random() * (gap * 2) - gap), // 이전 x 좌표에서 gap 범위 내에서 랜덤하게 x 좌표 설정
      y: pos.y + (Math.random() * (gap * 2) - gap), // 이전 y 좌표에서 gap 범위 내에서 랜덤하게 y 좌표 설정
    };
  }
}
