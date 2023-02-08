let homeTeam = document.getElementById('home-score');
let awayTeam = document.getElementById('guest-score');

let homeScore = 0;
let awayScore = 0;

let addOne = function() {
    homeScore++;
    homeTeam.textContent = homeScore;
}
let addTwo = function() {
    homeScore += 2;
    homeTeam.textContent = homeScore;
}
let addThree = function() {
    homeScore += 3;
    homeTeam.textContent = homeScore;
}

let addOneAway = function() {
    awayScore++;
    awayTeam.textContent = awayScore;
}
let addTwoAway = function() {
    awayScore += 2;
    awayTeam.textContent = awayScore;
}
let addThreeAway = function() {
    awayScore += 3;
    awayTeam.textContent = awayScore;
}

let reset = function() {
    homeScore = 0;
    homeTeam.textContent = homeScore;
    awayScore = 0;
    awayTeam.textContent = awayScore;
}