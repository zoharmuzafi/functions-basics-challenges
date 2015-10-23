# Solutions:

## Multiply:
```
var multiply = function(num1, num2) {
  return num1 * num2;
};

multiply(5, 7);
```

## Even or Odd:
```
var isEven = function(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

isEven(4);
```
## Index Swap:
```
var swap = function(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
};

swap(["moe", "larry", "curly"], 0, 2);
```

## Random:
```
var getRand = function(min, max) {
  return Math.random() * (max - min) + min;
};

getRand(5, 10);
```

## Random Array:
```
// use our `getRand` function as a helper (defined here again)
var getRand = function(min, max) {
  return Math.random() * (max - min) + min;
};

var randArr = function(length) {
  var newArr = [];
  for (var i = 0; i < length; i += 1) {
    newArr.push(getRand(1, 100));
  }
  return newArr;
};

randArr(3);
```
