(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  Asteroids.Game = function Game() {
    this.asteroids = [];
  };
  
  Asteroids.Game.DIM_X = 1024;
  Asteroids.Game.DIM_Y = 768;
  Asteroids.Game.NUM_ASTEROIDS = 4;
  
  Asteroids.Game.prototype.addAsteroids = function() {
    for (var i = 1; i <= Asteroids.Game.NUM_ASTEROIDS; i++) {
      var pos = Asteroids.Game.prototype.randomPosition();
      var x = new Asteroids.Asteroid({pos: pos}, this);
      this.asteroids.push(x);
    }
  };
  
  Asteroids.Game.prototype.randomPosition = function() {
    var x = Math.random() * Asteroids.Game.DIM_X;
    var y = Math.random() * Asteroids.Game.DIM_Y;
    return [x, y];
  };

  Asteroids.Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0, Asteroids.Game.DIM_X, Asteroids.Game.DIM_Y);
    this.asteroids.forEach(function(asteroid){
      asteroid.draw(ctx);
    });
  };
  
  Asteroids.Game.prototype.move = function() {
    this.asteroids.forEach(function(asteroid){
      asteroid.move();
    });
  };
  
  
  Asteroids.Game.prototype.checkCollisions = function() {
    for (var i = 0; i < Asteroids.Game.NUM_ASTEROIDS - 1; i++) {
      for (var j = i + 1; j < Asteroids.Game.NUM_ASTEROIDS; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          alert("CRASH!")
        }
      }
    }
    return false 
  };
  
  Asteroids.Game.prototype.remove = function (objToRemove) {
    
  }
  
  Asteroids.Game.prototype.step = function() {
    this.move();
    this.checkCollisions();
  };
   
  Asteroids.Game.prototype.wrap = function(pos) {
    if (pos[0] > Asteroids.Game.DIM_X){
      pos[0] -= Asteroids.Game.DIM_X;
    }
    if (pos[0] < 0){
      pos[0] += Asteroids.Game.DIM_X;
    }
    if (pos[1] > Asteroids.Game.DIM_Y){
      pos[1] -= Asteroids.Game.DIM_Y;
    }
    if (pos[1] < 0){
      pos[1] += Asteroids.Game.DIM_Y;
    }
    
    // pos;
  };
  
  
})(this);

var a = new Asteroids.Game
a.addAsteroids();

