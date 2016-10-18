class Game {
  constructor(fps, canvas) {
    this.fps = fps;
    this.screen = new Screen(canvas);
    this._setUp();
  }

  _setUp() {
    this.screen.add(Level.ONE);
  }

  start() {
    setInterval(() => {
      this.screen.clear();
      this.screen.draw();
      this.screen.update();
    }, 1000 / this.fps);
  }
}
