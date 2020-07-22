window.addEventListener('load', start);

var globalNames = ['um', 'dois', 'Três', 'Quatro', 'conco'];
var inputName = null;



function start() {
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
  render();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  function insertName(newName) {
    globalNames.push(newName);
    render();
  }
  function handleTyping(event) {
    if (event.key === 'Enter') {
      insertName(event.target.value);
    }
  }
  inputName.addEventListener('keyup', handleTyping);
  inputName.focus();
}

function render() {
  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';
  //criar ul
  //fazer n li's, conforme tamanho de globalNames
  var ul = document.createElement('ul');

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var li = document.createElement('li');
    li.textContent = currentName;
    ul.appenChild(li);
  }

  divNames.appenChild(ul);
}

function clearInput() {
  inputName.clear();
  inputName.focus();
}
