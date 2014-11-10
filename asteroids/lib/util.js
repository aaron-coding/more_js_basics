(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  
  Asteroids.Util = function Util() {};
  
  Asteroids.Util.prototype.inherits = function(childClass, parentClass) {
    function Surrogate () {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };

})(this);