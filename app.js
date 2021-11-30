// import functions and grab DOM elements
const cupA = document.getElementById('cup-A-img');
// console.log(cupA);
const cupB = document.getElementById('cup-B-img');
const cupC = document.getElementById('cup-C-img');

const cupABtn = document.getElementById('cup-A-btn');
// console.log(cupABtn);
const cupBBtn = document.getElementById('cup-B-btn');
const cupCBtn = document.getElementById('cup-C-btn');

const winsEl = document.getElementById('wins');
// console.log(winEl);
const lossesEl = document.getElementById('losses');
const attemptsEl = document.getElementById('attempts');

const resetBtn = document.getElementById('reset-btn');

// let state
let wins = 0;
let attempts = 0;


function resetImgs() {
  // - (reset image of all cups)
    cupA.src = './assets/original-cup.png';
    cupB.src = './assets/original-cup.png';
    cupC.src = './assets/original-cup.png';
}

console.log(resetImgs());

function updateWinLossAtt() {
    winsEl.textContent = wins;
    attemptsEl.textContent = attempts;
    lossesEl.textContent = attempts - wins;
}

// set event listeners 
cupABtn.addEventListener('click', () => {
  // - (reset image of all cups)
    resetImgs();
    console.log(resetImgs());
  //   ..set state..
  //   - increment total attempts
    attempts++;
  //   - use math.random() to decide which cup is correct
    const correctCup = Math.floor(Math.random() * 3);
    // console.log(correctCup);

  //   - we need to compare the correct cup with the cup the user clicked
  //        if the user clicked the correct cup, increment win
    if (correctCup === 0) {
        cupA.src = './assets/correct-cup.png';
        wins++;
        console.log(cupA.src);
//       if the user did NOT click the click correct cup, increment loss (because losses can be derived by subtracting wins from total attempts, WE SHOULD NOT TRACK as state)
    } else {
        cupA.src = './assets/wrong-cup.png';
    }
  //   ..update DOM..
  //   - change image of correct cup
  //   - change number of Wins/loss/Attempts
    updateWinLossAtt();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

cupBBtn.addEventListener('click', () => {
    resetImgs();
    attempts++;

    const correctCup = Math.floor(Math.random() * 3);

    if (correctCup === 1) {
        cupB.src = './assets/correct-cup.png';
        wins++;
    } else {
        cupB.src = './assets/wrong-cup.png'; 
    }

    updateWinLossAtt();
});

cupCBtn.addEventListener('click', () => {
    resetImgs();
    attempts++;

    const correctCup = Math.floor(Math.random() * 3);

    if (correctCup === 2) {
        cupC.src = './assets/correct-cup.png';
        wins++;
    } else {
        cupC.src = './assets/wrong-cup.png'; 
    }

    updateWinLossAtt();
});

resetBtn.addEventListener('click', () => {
    resetImgs();
});