const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0;

// Loop over the chars in `word` and create divs.xww
//
const createDivsForChars = word => {
  // select section with id="word-container" 
    // loop over the word
    for (const letter of word) {
    // for each char:
      document.querySelector('#word-container').insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`)
    }
};

// Loop over each letter in the alphabet and generate a button
// for each letter
const generateLetterButtons = () => {
  // loop over the alphabet global variable
    // for each letter:
    for (const letter of ALPHABET) {
      // create a button in the section id = #letter-buttons
      document.querySelector('#letter-buttons').insertAdjacentHTML('beforeend', `<button>${letter}</button>`)
    }     
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
// const buttonEl = document.querySelector('#letter-buttons');

const disableLetterButton = buttonEl => {
  // loop throug buttonEl array and create event listener for each button
  for (const button of buttonEl) {  
    // evt gets element that was actually clicked
    button.addEventListener('click', (evt) => {
      // once sth is clicked, update target of clicking event disabled prop to true
      evt.target.setAttribute('disabled', 'true');    
  });}
};

// CALL disableLetterButton
// get array all elements within container with id=letter-button id
const listButtons = document.querySelectorAll('#letter-buttons');
// call disableLetterButton on all buttons
disableLetterButton(listButtons);



// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = letter => {
  // Replace this with your code
};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hello';

  // call the function that makes an empty line for each letter in the word
  createDivsForChars(word);

  // call the function that makes a button for each letter in the alphabet
  generateLetterButtons();


  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
