class Canvas {
  constructor(id) {
    this.objects = [];

    const canvas = document.getElementById(id);
    this.context = canvas.getContext('2d');
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
