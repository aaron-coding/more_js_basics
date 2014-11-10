(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  Asteroids.Asteroid = function Asteroid(posObj) {
    var params = {
      pos: posObj.pos,
      color: "#000000",
      radius: 30,
      vel: [5,5]
    }
    Asteroids.MovingObject.call(this, params)
  };
  
  Asteroids.Util.prototype.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
  
})(this);