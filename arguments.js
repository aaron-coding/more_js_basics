  var sum = function() {
  var nums = Array.prototype.slice.call(arguments);
  var result = 0;
  for (var i = 0; i < nums.length; i++){
    result += nums[i];
  }
  console.log(result);
};

// sum(1,2,3,4);

Function.prototype.myBind = function(context) {
  var args = Array.prototype.slice.call(arguments, 1);
  var fun = this;
  return function () {
    var args2 = Array.prototype.slice.call(arguments);
    return fun.apply(context, args.concat(args2));
  };
};

var curriedSum = function(numArgs){
  var numbers = [];
  var _curriedSum = function(number){
    numbers.push(number);
    if (numbers.length === numArgs){
      return numbers.reduce(function(a,b){ return a + b});
    } else {
      return _curriedSum;
    }   
  }
  return _curriedSum;
}

Function.prototype.curry = function(numArgs){
  var args = [];
  var fn = this
  var _curriedIteration = function(arg){
    args.push(arg);
    if (args.length === numArgs){
      return fn.apply(null, args);
    } else {
      return _curriedIteration;
    }   
  }
  return _curriedIteration;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}



// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30