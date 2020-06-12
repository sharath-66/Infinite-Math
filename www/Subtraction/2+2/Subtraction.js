let n1 = Math.floor(Math.random() * 100 + 10);
let n2 = Math.floor(Math.random() * 100 + 10);
var tmp;

//swap numbers if n1<n2
if (n1 < n2) {
  tmp = n1;
  n1 = n2;
  n2 = tmp;
}

if (n1 > 100 || n2 > 100) {
  n1 = n1 - 10;
  n2 = n2 - 10;
}

document.getElementById("v1").value = n1;
document.getElementById("v2").value = n2;

let answer = n1 - n2;

checkAns = function () {
  var userAnswer = document.getElementById("answer").value;

  if (userAnswer == answer) {
    alert("Well Done! Your Answer is Correct");
  } else {
    alert("Correct answer is " + answer + ". Try again :)");
  }

  document.getElementById("answer").value = "";

  n1 = Math.floor(Math.random() * 100 + 10);
  n2 = Math.floor(Math.random() * 100 + 10);

  //swap numbers if n1<n2
  if (n1 < n2) {
    tmp = n1;
    n1 = n2;
    n2 = tmp;
  }

  if (n1 > 100 || n2 > 100) {
    n1 = n1 - 10;
    n2 = n2 - 10;
  }

  document.getElementById("v1").value = n1;
  document.getElementById("v2").value = n2;

  answer = n1 - n2;
};
