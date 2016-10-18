class Screen {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.objects = [];
  }

  add(object) {
    this.objects.push(object);
  }

  clear() {
    this.objects.forEach(object => object.clear(this.context));
  }

  update() {
    this.objects.forEach(object => object.update());
  }

  draw() {
    this.objects.forEach(object => object.draw(this.context));
  }
}
