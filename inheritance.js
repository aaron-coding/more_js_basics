Function.prototype.inherits = function(parentClass) {
  function Surrogate () {}
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
};

function MovingObject () {
}

MovingObject.prototype.move = "I can";

var objj =  new MovingObject();
console.log(objj.move);

function Ship () {
  this.shoot = "Bang!";
} 

Ship.inherits(MovingObject);

var ship1 = new Ship();
console.log("I'm a ship trying to move" + ship1.move);
console.log(ship1.shoot);
  console.log(objj.shoot);