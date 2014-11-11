(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  Asteroids.Asteroid = function Asteroid(posObj, game) {
    console.log(game);
    this.game = game;
    this.RADIUS = 30;
    this.COLOR = "#000000";
    var params = {
      pos: posObj.pos,
      color: this.COLOR,
      radius: this.RADIUS,
      game: game,
      vel: Asteroids.Util.prototype.randomVec(3)
    }
    Asteroids.MovingObject.call(this, params)
  };
  
  Asteroids.Util.prototype.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
  
})(this);
