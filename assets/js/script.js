// Element
const geme = document.getElementById('game');
const startGame = document.getElementById('start-game');
const playGame = document.getElementById('play-game');
const selectPari = document.getElementById('select-pari');
const selectDispari = document.getElementById('select-dispari');

// Element-none
let select;

// Input
const wordInput = document.getElementById('word-input');
const numInput = document.getElementById('number-input');

// Button
const plaiBtn = document.getElementById('pali-btn');
const playGameBtn = document.getElementById('play-game-btn');
const pariBtn = document.getElementById('pari-btn');
const dispariBtn = document.getElementById('dispari-btn');
const playNumberBtn = document.getElementById('play-number-btn');

// Output
const testWordOutput = document.getElementById('test-word-output');
const errorNumOutput = document.getElementById('error-num');
const numPcOutput = document.getElementById('num-pc-output');
const winOutput = document.getElementById('win');

// Functions
function paliTest(word){
  const wordSplit = word.split('');
  const wordSplitreverse = [];
  // const wordSplitreverse = wordSplit.reverse();
  for(let i = 0; i < wordSplit.length; i++){
    wordSplitreverse.push(wordSplit[wordSplit.length -1 - i]);
  }
  const wordReverse = (wordSplitreverse.join(''));
  if(word === ''){
    return 'Parola mancante "Inserire una parola palindorma"';
  }else if(word === wordReverse){
    return 'La parola é  palindorma';
  }else{
    return 'La parola non é palindroma';
  };
};

function palyGame(test){
  if(test === 'La parola é  palindorma'){
    playGameBtn.classList.remove('d-none');
    //-----
    wordInput.classList.add('d-none');
    plaiBtn.classList.add('d-none');
  };
};

function testWin(num){
  let numValid;
  let winCondition;
  if (num > 5 || num < 1){
    errorNumOutput.innerHTML = 'Inserisci un numero valido';
    errorNumOutput.classList.remove('d-none');
    numPcOutput.classList.add('d-none');
    winOutput.classList.add('d-none');
  }else if(isNaN(num)){
    errorNumOutput.innerHTML = 'Inserisci un numero';
    errorNumOutput.classList.remove('d-none');
    numPcOutput.classList.add('d-none');
    winOutput.classList.add('d-none');
  }else{
    errorNumOutput.classList.add('d-none');
    numPcOutput.classList.remove('d-none');
    winOutput.classList.remove('d-none');
    const numpc = Math.ceil(Math.random() * 5);
    numPcOutput.innerHTML = `Il pc ha scelto ${numpc}`;
    numValid = num + numpc;

    if(numValid % 2 === 0){
      winCondition = 'pari';
    }else{
      winCondition = 'dispari';
    };

    if(winCondition === select){
      winOutput.innerHTML = `La somma dei dumeri é ${numValid} che é ${winCondition} quindi hai vinto!`;
    }else{
      winOutput.innerHTML = `La somma dei dumeri é ${numValid} che é ${winCondition} quindi ha vinto il pc.`
    };
  }
}

//---------------------------------------------------------------------

plaiBtn.addEventListener('click', function(){
  const wordTest = wordInput.value
  paliTest(wordTest);
  testWordOutput.innerHTML = paliTest(wordTest);
  palyGame(paliTest(wordTest));
  wordInput.value = '';
});

playGameBtn.addEventListener('click', function(){
  testWordOutput.classList.add('d-none');
  playGameBtn.classList.add('d-none');
  //------
  game.classList.remove('d-none');
});

pariBtn.addEventListener('click', function(){
  startGame.classList.add('d-none');
  playGame.classList.remove('d-none');
  selectPari.classList.remove('d-none');
  select = 'pari';
});

dispariBtn.addEventListener('click', function(){
  startGame.classList.add('d-none');
  playGame.classList.remove('d-none');
  selectDispari.classList.remove('d-none');
  select = 'dispari';
});

playNumberBtn.addEventListener('click', function(){
  const numTest = parseInt(numInput.value);
  testWin(numTest);
  numInput.value = '';
})