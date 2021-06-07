console.log('Rock Paper Scissors Lizard Spock Game is on!');

// Cache elements
const scoreBoard_div = document.querySelector('.score-board');
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');

const result_h1 = document.getElementById('result');

const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');
const lizard = document.getElementById('l');
const spock = document.getElementById('k');

// Set hands
let hands = {
  r: 'Rock',
  p: 'Paper',
  s: 'Scissors',
  l: 'Lizard',
  k: 'Spock',
};

// Initialize the scores
let userScore = 0;
let compScore = 0;

const smUser = '(user)'.fontcolor('green').fontsize(3).sub();
const smComp = '(comp)'.fontcolor('orange').fontsize(3).sub();

function getCompHand() {
  const hands = ['r', 'p', 's', 'l', 'k'];
  const choice = Math.floor(Math.random() * 5);

  return hands[choice];
}

function win(user, comp) {
  const glow = document.getElementById(user);

  userScore_span.innerText = ++userScore;
  result_h1.innerHTML = `${hands[user]}${smUser} beats ${hands[comp]}${smComp}. You win!`;

  glow.classList.add('green-glow');
  setTimeout(() => glow.classList.remove('green-glow'), 500);
}

function lose(user, comp) {
  const glow = document.getElementById(user);

  compScore_span.innerText = ++compScore;
  result_h1.innerHTML = `${hands[comp]}${smComp} beats ${hands[user]}${smUser}. You lose!`;

  glow.classList.add('red-glow');
  setTimeout(() => glow.classList.remove('red-glow'), 500);
}

function draw(hand) {
  const glow = document.getElementById(hand);

  result_h1.innerHTML = `${hands[hand]} equals ${hands[hand]}. It's a draw.`;

  glow.classList.add('gray-glow');
  setTimeout(() => glow.classList.remove('gray-glow'), 500);
}

function game(userHand) {
  const compHand = getCompHand();

  switch (userHand + compHand) {
    case 'sp':
    case 'pr':
    case 'rl':
    case 'lk':
    case 'ks':
    case 'sl':
    case 'pk':
    case 'kr':
    case 'rs':
      win(userHand, compHand);
      break;
    case 'ps':
    case 'rp':
    case 'lr':
    case 'lk':
    case 'sk':
    case 'ls':
    case 'kp':
    case 'rk':
    case 'sr':
      lose(userHand, compHand);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
    case 'll':
    case 'kk':
      draw(userHand);
      break;
  }
}

// Main
function main() {
  rock.addEventListener('click', () => game('r'));
  paper.addEventListener('click', () => game('p'));
  scissors.addEventListener('click', () => game('s'));
  lizard.addEventListener('click', () => game('l'));
  spock.addEventListener('click', () => game('k'));
}

main();
