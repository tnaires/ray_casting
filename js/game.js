const FOREGROUND_CANVAS_ID = 'foreground';
const BACKGROUND_CANVAS_ID = 'background';
const ONE_SECOND = 1000;

class Game {
  constructor(fps, resolution) {
    this.fps = fps;
    this.foreground = new Canvas(FOREGROUND_CANVAS_ID, resolution);
    this.background = new Canvas(BACKGROUND_CANVAS_ID, resolution);

    this.addForegroundObjects();
  }

  addForegroundObjects() {
    const player = new Player(50, 50);
    this.foreground.add(player);
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
