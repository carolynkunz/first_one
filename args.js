function args(){
  return arguments.length;
}

console.log(args(1,2,3));

function args2(){
  console.log(arguments.pop());
}

args2(1,2,3);
