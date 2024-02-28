// Element
const geme = document.getElementById('game');
const startGame = document.getElementById('start-game');
const playGame = document.getElementById('play-game');
const selectPari = document.getElementById('select-pari');
const selectDispari = document.getElementById('select-dispari');

// Input
const wordInput = document.getElementById('word-input');

// Button
const plaiBtn = document.getElementById('pali-btn');
const playGameBtn = document.getElementById('play-game-btn');
const pariBtn = document.getElementById('pari-btn');
const dispariBtn = document.getElementById('dispari-btn');

// Output
const testWordOutput = document.getElementById('test-word-output');

// Functions
function paliTest(word){
  const wordSplit = word.split('');
  const wordReverse = (wordSplit.reverse().join(''));
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
});

dispariBtn.addEventListener('click', function(){
  startGame.classList.add('d-none');
  playGame.classList.remove('d-none');
  selectDispari.classList.remove('d-none');
});