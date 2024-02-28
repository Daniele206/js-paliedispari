// Element

// Input
const wordInput = document.getElementById('word-input');

// Button
const plaiBtn = document.getElementById('pali-btn');

// Output

// Functions
function paliTest(word){
  const wordSplit = word.split('');
  console.log(wordSplit);
  const wordReverse = (wordSplit.reverse().join(''));
  console.log(wordReverse);
  if(word === wordReverse){
    return 'La parola é palindorma'
  }else{
    return 'La parola non é palindroma'
  }
}

//---------------------------------------------------------------------

plaiBtn.addEventListener('click', function(){
  const wordTest = wordInput.value
  console.log(wordTest);
  paliTest(wordTest);
  console.log(paliTest(wordTest));
})
