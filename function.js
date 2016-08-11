function greet (){
  console.log('Hello, World!');
}

greet();

// function yell(){
//   for (var i = 1; i <=10; i++){
//     if (i <10){
//       console.log('my phrase');
//     } else {
//       console.log('MY PHRASE!');
//     }
//   }
// }
//
// yell();

function yell(phrase){
  for (var i = 1; i <=10; i++){
    if (i <10){
      console.log(phrase);
    } else {
      console.log(phrase.toUpperCase() + '!');
    }
  }
}

yell('my phrase');
yell('carolyn');
