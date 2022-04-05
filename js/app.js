// Rock Paper Scissors Lizard Spock Game Module
console.log("Rock Paper Scissors Lizard Spock Game is on!");
// Cache elements
var scoreBoard_div = document.querySelector(".score-board");
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var result_h1 = document.getElementById("result");
var rock = document.getElementById("r");
var paper = document.getElementById("p");
var scissors = document.getElementById("s");
var lizard = document.getElementById("l");
var spock = document.getElementById("k");
// Set hands
var hands = {
    r: "Rock",
    p: "Paper",
    s: "Scissors",
    l: "Lizard",
    k: "Spock"
};
// Set action words
var actions = {
    sp: "cuts",
    pr: "covers",
    rl: "crushes",
    lk: "poisons",
    ks: "smashes",
    sl: "decapitates",
    lp: "eats",
    pk: "disproves",
    kr: "vaporizes",
    rs: "crushes"
};
// Initialize the scores
var userScore = 0;
var compScore = 0;
function getCompHand() {
    var hands = ["r", "p", "s", "l", "k"];
    var choice = Math.floor(Math.random() * 5);
    return hands[choice];
}
function win(user, comp) {
    var glow = document.getElementById(user);
    var action = actions[user + comp];
    userScore_span.innerText = (++userScore).toString();
    result_h1.innerHTML = "".concat(hands[user], "<span style=\"color:green;font-size:medium;vertical-align:sub;\">(user)</span> ").concat(action, " ").concat(hands[comp], "<span style=\"color:red;font-size:medium;vertical-align:sub;\">(comp)</span>. You win!");
    glow.classList.add("green-glow");
    setTimeout(function () { return glow.classList.remove("green-glow"); }, 500);
}
function lose(user, comp) {
    var glow = document.getElementById(user);
    var action = actions[comp + user];
    compScore_span.innerText = (++compScore).toString();
    result_h1.innerHTML = "".concat(hands[comp], "<span style=\"color:green;font-size:medium;vertical-align:sub;\">(comp)</span> ").concat(action, " ").concat(hands[user], "<span style=\"color:red;font-size:medium;vertical-align:sub;\">(user)</span>. You lose!");
    glow.classList.add("red-glow");
    setTimeout(function () { return glow.classList.remove("red-glow"); }, 500);
}
function draw(hand) {
    var glow = document.getElementById(hand);
    result_h1.innerHTML = "".concat(hands[hand], " equals ").concat(hands[hand], ". It's a draw.");
    glow.classList.add("gray-glow");
    setTimeout(function () { return glow.classList.remove("gray-glow"); }, 500);
}
function game(userHand) {
    var compHand = getCompHand();
    switch (userHand + compHand) {
        case "sp":
        case "pr":
        case "rl":
        case "lk":
        case "ks":
        case "sl":
        case "lp":
        case "pk":
        case "kr":
        case "rs":
            win(userHand, compHand);
            break;
        case "ps":
        case "rp":
        case "lr":
        case "kl":
        case "sk":
        case "ls":
        case "kp":
        case "rk":
        case "sr":
            lose(userHand, compHand);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "kk":
            draw(userHand);
            break;
    }
}
// Main
function main() {
    rock.addEventListener("click", function () { return game("r"); });
    paper.addEventListener("click", function () { return game("p"); });
    scissors.addEventListener("click", function () { return game("s"); });
    lizard.addEventListener("click", function () { return game("l"); });
    spock.addEventListener("click", function () { return game("k"); });
}
main();
