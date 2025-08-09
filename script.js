/*Add your JavaScript here*/
var rumiScore = 0;
var miraScore = 0;
var zoeyScore = 0;
  var questionCount = 0;


var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");

// Event Listeners //

q1a1.addEventListener("click", Rumi);
q1a2.addEventListener("click", Zoey);
q1a3.addEventListener("click", Mira);

q2a1.addEventListener("click", Zoey);
q2a2.addEventListener("click", Rumi);
q2a3.addEventListener("click", Mira);

q3a1.addEventListener("click", Mira);
q3a2.addEventListener("click", Rumi);
q3a3.addEventListener("click", Zoey);

q4a1.addEventListener("click", Zoey);
q4a2.addEventListener("click", Mira);
q4a3.addEventListener("click", Rumi);

q5a1.addEventListener("click", Mira);
q5a2.addEventListener("click", Zoey);
q5a3.addEventListener("click", Rumi);

q6a1.addEventListener("click", Zoey);
q6a2.addEventListener("click", Rumi);
q6a3.addEventListener("click", Mira);

q7a1.addEventListener("click", Rumi);
q7a2.addEventListener("click", Mira);
q7a3.addEventListener("click", Zoey);

restart.addEventListener("click", Restart);

// Track score/Defining functions //

function Rumi() {
rumiScore += 1;
questionCount += 1;

console.log("questionCount = " + questionCount + " rumiScore = " + rumiScore);

if (questionCount == 7) {
  console.log("The quiz is done!")
  updateResult1();
 }
}

function Zoey() {
zoeyScore += 1;
questionCount += 1;

console.log("questionCount = " + questionCount + " zoeyScore = " + zoeyScore);

  if (questionCount == 7) {
    console.log("The quiz is done!")
    updateResult1();
  }
}

function Mira() {
miraScore += 1;
questionCount += 1;

console.log("questionCount = " + questionCount + " miraScore = " + miraScore);

  if (questionCount == 7) {
    console.log("The quiz is done!")
    updateResult1();
  }
}

function updateResult1() {
  //indiviual winners //
  if (rumiScore > zoeyScore && rumiScore > miraScore) {
    result.innerHTML = "You're most like Rumi!";
    console.log("You're most like Rumi!");
  }
  else if (zoeyScore > rumiScore && zoeyScore > miraScore) {
    result.innerHTML = "You're most like Zoey!";
    console.log("You're most like Zoey!");
  }
  else if (miraScore > zoeyScore && miraScore > rumiScore) {
    result.innerHTML = "You're most like Mira!";
    console.log("You're most like Mira!");
  }
// Tie winners //
  else if (rumiScore === zoeyScore && rumiScore > miraScore) {
    result.innerHTML = "It's a tie! You're a mix of Rumi and Zoey!";
    console.log("It's a tie! You're a mix of Rumi and Zoey!");
  }
  else if (rumiScore === miraScore && rumiScore > zoeyScore) {
    result.innerHTML = "It's a tie! You're a mix of Rumi and Mira!";
    console.log("It's a tie! You're a mix of Rumi and Mira!");
  }
  else if (zoeyScore === miraScore && zoeyScore > rumiScore) {
    result.innerHTML = "It's a tie! You're a mix of Mira and Zoey!";
    console.log("It's a tie! You're a mix of Mira and Zoey!");
  }
}

function Restart() {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  rumiScore = 0;
  zoeyScore = 0;
  miraScore = 0;
} 