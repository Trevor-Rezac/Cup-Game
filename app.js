// import functions and grab DOM elements
const cupA = document.getElementById('cup-A-img');
const cupB = document.getElementById('cup-B-img');
const cupC = document.getElementById('cup-C-img');

const cupABtn = document.getElementById('cup-A-btn');
const cupBBtn = document.getElementById('cup-B-btn');
const cupCBtn = document.getElementById('cup-C-btn');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const attemptsEl = document.getElementById('attempts');

const resetCupBtn = document.getElementById('reset-cup-btn');
const resetStatsBtn = document.getElementById('reset-stats-btn');

// let state
let wins = 0;
let attempts = 0;

const cupArr = [
    cupA,
    cupB,
    cupC,
];
// console.log(cupArr);

cupABtn.addEventListener('click', () => {

    const correctCup = getRandomItem(cupArr);

    handleGuess(cupA, correctCup);
});

cupBBtn.addEventListener('click', () => {
    
    const correctCup = getRandomItem(cupArr);
    
    handleGuess(cupB, correctCup);
});

cupCBtn.addEventListener('click', () => {

    const correctCup = getRandomItem(cupArr);

    handleGuess(cupC, correctCup);
});

resetCupBtn.addEventListener('click', () => {
    resetImgs();
    enableBtns();
});

resetStatsBtn.addEventListener('click', () => {
    resetStats();
});

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}
// console.log(getRandomItem(cupArr));

function handleGuess(userGuess, correctCup) {
    resetImgs();
    attempts++;

    if (userGuess === correctCup) {
        correctCup.src = './assets/correct-cup.png';
        wins++;
    } else {
        userGuess.src = './assets/wrong-cup.png';
    }

    updateWinLossAtt();
    disableBtns();
}

function disableBtns() {
    cupABtn.disabled = true;
    cupBBtn.disabled = true;
    cupCBtn.disabled = true;
}

function enableBtns() {
    cupABtn.disabled = false;
    cupBBtn.disabled = false;
    cupCBtn.disabled = false;
}

function resetStats() {
    wins = 0;
    attempts = 0;
    updateWinLossAtt();
}

function resetImgs() {
    cupA.src = './assets/original-cup.png';
    cupB.src = './assets/original-cup.png';
    cupC.src = './assets/original-cup.png';
}

function updateWinLossAtt() {
    winsEl.textContent = wins;
    attemptsEl.textContent = attempts;
    lossesEl.textContent = attempts - wins;
}