// Grabing reference to all element
const heading = document.querySelector('h1');
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');

// function to display quizes
function quizDisplay (){

    // Array of questions' 
    const quizQuestions = [
        {
            question : "How many days are there in a week ?",
            answer : {
                a : "6",
                b : "7",
                c : "8",
                d : "9"
            },
            correctAnswer : "b"
        },
        {
            question : "How many hours are there in a Day ?",
            answer : {
                a : "24",
                b : "44",
                c : "14",
                d : "18"
            },
            correctAnswer : "a"
        },
        {
            question : "How many days are there in a leep Year ?",
            answer : {
                a : "365",
                b : "364",
                c : "363",
                d : "366"
            },
            correctAnswer : "d"
        },
        {
            question : "How many days are there in a july month?",
            answer : {
                a : "29",
                b : "30",
                c : "31",
                d : "32"
            },
            correctAnswer : "c"
        }
    ];
    quizQuestions.forEach( (e) => {
        console.log(e.question);

        console.log(e.answer);
              console.log(e.answer.a);
              console.log(e.answer.b);
              console.log(e.answer.c);
              console.log(e.answer.d);
        console.log(e.correctAnswer);
    })


};

// Display result 
function DisplayResult () {
    
}

// display Quiz right away
quizDisplay();

// Handle submitting the quiz
submitButton.addEventListener('click' ,  DisplayResult);



heading.style.marginBottom = " 5px ";
heading.style.borderBottom = "2px solid green"
result.style.backgroundColor = "purple";

