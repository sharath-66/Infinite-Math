let n1 = Math.floor(Math.random()*10 + 1);
let n2 = Math.floor(Math.random()*10 + 1);

document.getElementById('v1').value = n1;
document.getElementById('v2').value = n2;

let answer = n1 / n2;

const checkAns = () => {
    var userAnswer = document.getElementById('answer').value;

    if (userAnswer == answer) {
        alert('Well Done! Your Answer is Correct');
    }
    else{
        alert('Correct answer is ' + answer + '. Try again :)')
    }

    document.getElementById('answer').value = "";

    n1 = Math.floor(Math.random()*10 + 1);
    n2 = Math.floor(Math.random()*10 + 1);

    document.getElementById('v1').value = n1;
    document.getElementById('v2').value = n2;

    answer = n1 / n2;
}