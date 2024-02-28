// Element

// Input
const wordInput = document.getElementById('word-input');

// Button
const plaiBtn = document.getElementById('pali-btn');
const playGameBtn = document.getElementById('play-game-btn');

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
  }
}

//---------------------------------------------------------------------

plaiBtn.addEventListener('click', function(){
  const wordTest = wordInput.value
  paliTest(wordTest);
  testWordOutput.innerHTML = paliTest(wordTest);

  palyGame(paliTest(wordTest));
})
