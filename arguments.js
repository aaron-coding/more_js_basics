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
  }
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

console.log(curriedSum(4)(5)(30)(20)(1));