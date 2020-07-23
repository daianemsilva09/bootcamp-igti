'use strict'; // O JavaScript acusa mais erros

//var x let
//var escopo abrangente
/*
function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var' + i);
  }
  i = 20;

  console.log(i);
}

withVar();

function withLet() {
  for (var i = 0; i < 10; i++) {
    console.log('var' + i);
  }
  //i = 20;

  //console.log(i);
}

withVar();
withLet();

//cost - não podemos reatribuir valores

const c =10;
c = 20;

d.push(1);
console.log(d);
*/
// function e arrowFunction

function sum(a, b) {
  return a + b;
};

//arrow function
const sum3 = (a, b) =>{
  return a + b;
};

//arrow function reduzida
const sum4 = (a, b) => a + b;

console.log(sum(2, 3));
console.log(sum(2, 3));
console.log(sum(2, 3));
console.log(sum(2, 3));

// template literals
const name ='Dai';
const surName ='Silva';
const text1 ='Meu nome é ' +name+ ' ' +surName;
const text2=`Meu nome é ${name} ${surName}`;


console.log(text1);
console.log(text2);

const sum5 =(a, b = 10) => a + b;
console.log(sum5(2));




