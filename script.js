const begin = async function () {
    name = await getName();
    startExam();
};

let name = "";
let intervalID;
let examDuration = 60000;
let remainingTime = examDuration;
let questions = [
    {
      title: "What would be the output of `[,,,,].length`?",
      answers: ["4", "5", "undefined", "0"],
      imageSrc: "images/arraylength.png",
      correctAnswer: "4"
    },
    {
      title: "Which method is used to parse a JSON string into a JavaScript object?",
      answers: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.toObject()"],
      imageSrc: "images/JSON.png",
      correctAnswer: "JSON.parse()"
    },
    {
      title: "Which of the following is a valid way to define a function in JavaScript?",
      answers: [
        "function myFunc() {}",
        "let myFunc = function() {}",
        "const myFunc = () => {}",
        "All of the above"
      ],
      imageSrc: "images/functions.png",
      correctAnswer: "All of the above"
    },
    {
      title: "What keyword is used to declare a variable in JavaScript?",
      answers: ["let", "var", "const", "All of the above"],
      imageSrc: "images/variables.jpg",
      correctAnswer: "All of the above"
    },
    {
      title: "What does `===` mean in JavaScript?",
      answers: [
        "Equality without type conversion",
        "Equality with type conversion",
        "Assignment operator",
        "None of the above"
      ],
      imageSrc: "images/operators.jpg",
      correctAnswer: "Equality without type conversion"
    },
    {
      title: "Which function is used to delay code execution in JavaScript?",
      answers: ["setTimeout()", "setInterval()", "delay()", "wait()"],
      imageSrc: "images/delay.jpeg",
      correctAnswer: "setTimeout()"
    },
    {
      title: "What is the correct way to create an array in JavaScript?",
      answers: [
        "let arr = [1, 2, 3];",
        "let arr = (1, 2, 3);",
        "let arr = {1, 2, 3};",
        "let arr = <1, 2, 3>;"
      ],
      imageSrc: "images/arrays.png",
      correctAnswer: "let arr = [1, 2, 3];"
    },
    {
      title: "Which keyword is used to stop a loop in JavaScript?",
      answers: ["break", "stop", "exit", "return"],
      imageSrc: "images/loops.jpg", 
      correctAnswer: "break"
    },
    {
      title: "Which event occurs when a user clicks on an HTML element?",
      answers: ["onClick", "onMouseOver", "onKeyDown", "onHover"],
      imageSrc: "images/events.jpg",
      correctAnswer: "onClick"
    },
    {
      title: "What will be the output of `'55' - 5`?",
      answers: ["50", "55", "5", "NaN"],
      imageSrc: "images/string.png",
      correctAnswer: "50"
    }
  ];
  
randomize(questions);
questions.map((question)=>{
    randomize(question.answers)
    return new Question(question.title,question.imageSrc,question.answers,question.correctAnswer)
})
let currentQuestion = 0;
let result = 0;

let Nextbtn = document.querySelector("button");
Nextbtn.addEventListener("click",showNext);

begin();






