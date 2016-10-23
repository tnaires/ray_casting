var Game = function(_fps, _canvas) {
  var
    _screen,

    _tick = function() {
      _screen.clear();
      _screen.update();
      _screen.draw();
    };

  this.setUp = function() {
    _screen = new Screen(_canvas);
    _screen.add(Level.ONE);
  };

  this.start = function() {
    setInterval(_tick, 1000 / _fps);
  };
};
