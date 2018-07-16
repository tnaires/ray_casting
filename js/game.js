const FOREGROUND_CANVAS_ID = 'foreground';
const BACKGROUND_CANVAS_ID = 'background';
const ONE_SECOND = 1000;

class Game {
  constructor(fps) {
    this.fps = fps;
    this.foreground = new Canvas(FOREGROUND_CANVAS_ID);
    this.background = new Canvas(BACKGROUND_CANVAS_ID);
  }

  start() {
    const tick = () => {
      this.foreground.clear();
      this.foreground.update();
      this.foreground.draw();
    };

    setInterval(tick, ONE_SECOND / this.fps);
  }
}
