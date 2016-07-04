var
  FPS = 50,
  canvas = document.getElementById('screen'),
  game;

game = new Game();
game.setUp(FPS, canvas);
game.start();
