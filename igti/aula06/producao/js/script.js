var a = 5;
var b = 6;

if (a > b){
 console.log(a + 'é maior que ' + b);
}
else{
  if(a < b){
  console.log(a + 'é maior que' + b);
  }
  else{
  console.log(a + 'é igual'+ b);
}
}

var r ='';

//prettier-ignore
switch (dia) {
  case 1: r = 'Dom'; break;
  case 2: r = 'Seg'; break;
  case 3: r = 'Ter'; break;
  case 4: r = 'Qua'; break;
  case 5: r = 'Qui'; break;
  case 6: r = 'Sex'; break;
  case 7: r = 'Sab'; break;

  default: r ='Invalido';
}

console.log(r);
