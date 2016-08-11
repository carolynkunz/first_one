function average (array){
  return ((array[0] + array[1] + array[2])/3);
}

console.log(average([2,4,6]));
console.log(average([10,12,14]));

function anyAverage (array){
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i];
    return (sum/array.length);
  }
}

console.log(anyAverage([2,4,6]));
