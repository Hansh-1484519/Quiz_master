// Grabing reference to all element
const heading = document.querySelector('h1');
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');

// Array of questions' 
const quizQuestions = [
    {
        question: "How many days are there in a week ?",
        answer: {
            a: "6",
            b: "7",
            c: "8",
            d: "9"
        },
        correctAnswer: "b"
    },
    {
        question: "How many hours are there in a Day ?",
        answer: {
            a: "24",
            b: "44",
            c: "14",
            d: "18"
        },
        correctAnswer: "a"
    },
    {
        question: "How many days are there in a leep Year ?",
        answer: {
            a: "365",
            b: "364",
            c: "363",
            d: "366"
        },
        correctAnswer: "d"
    },
    {
        question: "How many days are there in a july month?",
        answer: {
            a: "29",
            b: "30",
            c: "31",
            d: "32"
        },
        correctAnswer: "c"
    }
];

// function to display quizes
function quizDisplay() {
    // array to store html elemnt output
    const output = [];

    // render over each question and show them on User's Screen
    quizQuestions.forEach((eachQuestion, index) => {
        //const para = document.createElement('p');
        //const input = document.createElement('input')
        const answers = [];
        for (letter in eachQuestion.answer) {
            answers.push(
                `<label>
                <input type = "radio" name = "Question${index}" value = "${letter}">
                ${letter} : ${eachQuestion.answer[letter]}
                 </label>`
            )
        }
        output.push(
            `<div class = "slide">
            <div class = "question"> ${eachQuestion.question} </div>
            <div class = "answer"> ${answers.join('')} </div>
            </div>
            `
        );
        quizContainer.innerHTML = output.join('');
        /*
       console.log(eachQuestion.question);

       console.log(e.answer);
             console.log(e.answer.a);
             console.log(e.answer.b);
             console.log(e.answer.c);
             console.log(e.answer.d);
       console.log(e.correctAnswer);
       */
    })
};

// Display result 
function DisplayResult() {
    const answerContainers = quizContainer.querySelectorAll('.answer');
    console.log(answerContainers);
    let correctCount = 0;
    quizQuestions.forEach((eachQuestion, index) => {
        // find the selected answer by the user
        const answerContainer = answerContainers[index];
        console.log(answerContainer);

        const selector = `input[name = "Question${index}" ]:checked`;
        const selectedAnswer = (answerContainer.querySelector(selector) || {}).value;
        console.log(selectedAnswer);
        if (selectedAnswer == eachQuestion.correctAnswer) {
            correctCount++;
            answerContainers[index].style.color = 'lightgreen';
        }
        else {
            answerContainers[index].style.color = 'red';
        }
    });

    result.innerHTML = `${correctCount} out of ${quizQuestions.length}`;
    result.style.display = 'block';
};

// display Quiz right away
quizDisplay();

const nextButton = document.getElementById('next')
const previousButton = document.getElementById('prev')
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

//function to show only one question on the screen at a time;
function showOneQuestion(n){
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if( currentSlide === 0){
        previousButton.style.display = 'none';
    }else{
        previousButton.style.display = 'inline-block';
    }
    if( currentSlide === slides.length-1){
        nextButton.style.display  = 'none';
        submitButton.style.display = 'inline-block';
    }else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}
showOneQuestion( currentSlide );

function showPreviousSlide(){
    showOneQuestion( currentSlide - 1);
}
function showNextSlide(){
    showOneQuestion(currentSlide + 1);
}

// Handle submitting the quiz and pagination
previousButton.addEventListener('click' , showPreviousSlide);
nextButton.addEventListener('click' , showNextSlide);
submitButton.addEventListener('click', DisplayResult);


