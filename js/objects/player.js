const PLAYER_DOT_RADIUS = 3;

class Player {
  constructor(x, y, angle = 0) {
    this.position = new Point(x, y);
    this.angle = angle;
  }

  clear(context) {
    const upperLeftCorner = this.position.add(-PLAYER_DOT_RADIUS, -PLAYER_DOT_RADIUS);

    context.clearRect(
      upperLeftCorner.x,
      upperLeftCorner.y,
      PLAYER_DOT_RADIUS * 2,
      PLAYER_DOT_RADIUS * 2
    );
  }

  update() {

  }

  draw(context) {
    context.beginPath();
    context.arc(this.position.x, this.position.y, PLAYER_DOT_RADIUS, 0, 2 * Math.PI);
    context.stroke();
  }
}
