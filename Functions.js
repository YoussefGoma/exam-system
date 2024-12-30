const randomize = function (arr) 
{ 
    for (let i = arr.length - 1; i > 0; i--)
    {
        let j = Math.floor(Math.random() * (i + 1)); 
        [arr[i], arr[j]] = [arr[j], arr[i]];
    } 
} 

const renderQuestion = function () {
    let counter = 0;
    let question = questions[currentQuestion];
    let title = document.querySelector("#title");
    let image = document.querySelector("#img");
    let answersBox =document.querySelectorAll(".answer");
    title.innerText = question.title;
    image.src = question.imageSrc;
    answersBox.forEach(answer => {
        answer.innerText = question.answers[counter];
        answer.classList.remove("selected");
        answer.addEventListener("click",(event)=>{
            document.querySelectorAll(".answer").forEach(box => {
                box.classList.remove("selected");
              });
            event.target.classList.add("selected");
            document.querySelector("button").disabled = false;
        })
        counter++;
    })
    let Nextbtn = document.querySelector("button");
    Nextbtn.disabled = true;
    if (currentQuestion == questions.length-1) {
        Nextbtn.innerText = "Finish";
    }
}
const showNext = function(){
    let selectedAnswer = document.querySelector(".selected").innerText;
    if (selectedAnswer == questions[currentQuestion].correctAnswer){
        result++;
    }
    currentQuestion++;
    if(currentQuestion<questions.length){
        renderQuestion();
    }else{
        clearInterval(intervalID);
        showResult();
    }


}

const showResult = function(){
    let message;
    if (result>0.5*questions.length){
        message = `Well done ${name}, you passed with a score of ${result}/${questions.length}`
    }else {
        message = `oh ${name}, you failed with a score of ${result}/${questions.length}`

    }
    let divContainer = document.querySelector("#container");
    divContainer.innerHTML = "";
    divContainer.innerText = message;
    const progressContainer = document.createElement("div");
    progressContainer.classList.add("progressContainer");
    const percentage = result / questions.length;
    const percentageText = Math.floor(result / questions.length*100)+"%";

    const progress = new ProgressBar.SemiCircle(progressContainer, {
        strokeWidth: 4,
        color: result > 0.5 * questions.length ? '#4CAF50' : '#F44336', 
        trailColor: '#e6e6e6',
        trailWidth: 1,
        duration: 1400,
        easing: 'easeInOut',
        from: { color: '#FFEA82', width: 1 },
        to: { color: '#ED6A5A', width: 4 },
    });
    divContainer.append(progressContainer);
    progress.setText(percentageText);
    progress.animate(percentage);
}

const getName = async function () {
    const { value: name } = await Swal.fire({
        title: "Enter your Nmae",
        input: "text",
        inputLabel: "Your Name",
        inputValidator: (value) => {
            if (!value.trim()) {
                return "Name cannot be empty";
            }
            if (!/^[A-Za-z\s]{3,}$/.test(value.trim())) {
                return "Name must be at least 3 characters long and contain only letters and spaces";
            }
        }
      });
    return name;
}

const startExam = function () {
    let timebar = document.querySelector("#timeBar");
    intervalID = setInterval(()=>{
        remainingTime -= 1000
        let percentage = remainingTime/examDuration * 100;
        if (percentage<30){
            timebar.style.backgroundColor = "red";
        }
        timebar.style.width = `${percentage}%`
        if(remainingTime<=0){
            clearInterval(intervalID)
            showResult();
        }
    },1000);
    renderQuestion();
}