(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  
  Asteroids.MovingObject = function MovingObject(optionsObj) {
    this.pos = optionsObj.pos,
    this.vel = optionsObj.vel,
    this.radius = optionsObj.radius,
    this.color = optionsObj.color;
  };
  
  Asteroids.MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };
  
  Asteroids.MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };
  
})(this);