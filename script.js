
const quizContainer = document.getElementById("quiz-container");
quizContainer.onmouseenter = 
    () => {

        quizContainer.style.backgroundColor = "white";
    }
quizContainer.onmouseleave = function colorChange () {
    quizContainer.style.backgroundColor = "yellow";
}
