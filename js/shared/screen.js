var Screen = function(_canvas) {
  var
    _context = _canvas.getContext('2d'),
    _objects = [];

  this.add = function(object) {
    _objects.push(object);
  };

  this.clear = function() {
    _objects.forEach(function(object) {
      object.clear(_context);
    });
  };

  this.update = function() {
    _objects.forEach(function(object) {
      object.update();
    });
  };

  this.draw = function() {
    _objects.forEach(function(object) {
      object.draw(_context);
    });
  };
};
