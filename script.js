// CALL HTML ELEMENTS 

const username = document.querySelector("#username");
const usermail = document.querySelector("#usermail");
const homePage = document.querySelector("#home__page");

const quizPage = document.querySelector("#quiz__page");

const scorePage = document.querySelector("#score__page");

const homePageForm = document.querySelector("form")



// GENERATION QUESTION ALEATOIRE 

questions.sort(() => Math.random() - 0.5);
for (let i = 0; i < questions.length; i++) {
    questions[i].answerSuggested.sort(() => Math.random() - 0.5);

};

let indexQuestion = 0;

let userScore = 0; // here we stock Score 

let answerSelected = ""; // here we stock answer 

const questionTitle = document.querySelector(".question-title");

const questionStatusContainer = document.querySelector(".questionstatus__container")

const questionForm = document.querySelector(".question-form");

// CALL AND DISPLAY QUESTIONS AND ANOTHER PROPERTY

const showQuestionsFunction = (indexQuestion) => {
    document.title = "JavaScript Quiz APP";

    let questionText = `<span> ${questions[indexQuestion].question} </span>`;
    questionTitle.innerHTML = questionText; //DISPLAY TITLE

    questionStatusContainer.innerHTML = `<div class="status">` +
        `<p class="question__number">Question  ${indexQuestion + 1}/15 </p>` + // DISPLAY STATUS QUESTION EX. 1/15
        `<div class="timercounter">` + `</div>` +
        `</div>` + `<div class="progressbar__container">` +
        `<div class="progressbar">` + `</div>` + // DISPLAY PROGRESS BAR
        `</div > `;

    // Display question in form

    questionForm.innerHTML = `<div class="answer__container">` +
        `<input type="radio" class="answer" id="firstAnswerSuggested" name="answer" value="${questions[indexQuestion].answerSuggested[3]}">` +
        `<label for="firstAnswerSuggested"> ${questions[indexQuestion].answerSuggested[3]} </label>` +
        `</div>` +

        `<div class="answer__container">` +
        `<input type="radio" class="answer" name="answer" id="secondAnswerSuggested" value="${questions[indexQuestion].answerSuggested[1]}">` +
        `<label for="secondAnswerSuggested"> ${questions[indexQuestion].answerSuggested[1]} </label>` +
        `</div>` +

        `<div class="answer__container">` +
        `<input type="radio" class="answer" name="answer" id="thirdAnswerSuggested" value="${questions[indexQuestion].answerSuggested[2]}" >` +
        `<label for="thirdAnswerSuggested">  ${questions[indexQuestion].answerSuggested[2]}</label>` +
        `</div>` +

        `<div class="answer__container">` +
        `<input type="radio" class="answer" name="answer" id="fourthAnswerSuggested" value="${questions[indexQuestion].answerSuggested[0]}">` +
        `<label for="fourthAnswerSuggested">${questions[indexQuestion].answerSuggested[0]}</label>` +
        `</div>` +

        `<div class="buttonContainer">` +
        `<input type="button" value="Quitter" class="exitButton">` +
        `<input type="button" value="Suivant" class="nextButton" disabled>` +
        `</div>`;;

    //  Next Question operation
    const nextQuestionButton = document.querySelector(".nextButton"); // call next button 

    const answers = document.querySelectorAll("input[name='answer']"); // call all answers 

    // boucle for of, check answer 
    const checkAnswer = () => {
        for (const answer of answers) {
            answer.addEventListener("click", changeAnswer = () => {
                nextQuestionButton.disabled = false; // Active next button 
                answerSelected = answer.value; // answerSelected get a question value
                getUserScore();

            });
        };
    };

    // if questions is finish change de value of button
    if (indexQuestion === questions.length - 1) {
        nextQuestionButton.value = "Terminer";
    };

    // function pour passer a la question suivante
    const nextQuestion = () => {
        clearInterval(countTime); // on remet le compteur a 0
        countTime = 0;
        if (indexQuestion < questions.length - 1) {
            // Get user current score
            getUserScore();
            indexQuestion++;
            // Show next question
            showQuestionsFunction(indexQuestion);
            // Restart progress bar
            startProgress(100);
        } else {
            // On last question 
            getUserScore();
            scorePage.style.display = "flex";

            showUserscorePage();
            quizPage.classList.remove("show");
        };

    };

    const getUserScore = () => {
        let correctAnswer = questions[indexQuestion].correctAnswer; // recupere correcte question
        console.log(correctAnswer);
        if (answerSelected == correctAnswer) {
            userScore++; // incremente our score 
            answerSelected = ""; // initialise a 0 notre chaine de reponse
        } else {
            userScore = userScore;
        };
    };

    // Our timer when we passed on next question
    nextQuestionButton.addEventListener("click", nextQuestion);
    const timeCounter = document.querySelector(".timercounter");

    let countTime = 0;

    const startTime = (time) => {
        const timer = () => {
            time--; // decrementation du timing 

            timeCounter.textContent = time;

            if (time < 9) {
                let addZero = timeCounter.textContent;
                timeCounter.textContent = "0" + addZero;
            }
            if (time < 0) {

                clearInterval(countTime);
                nextQuestion();
            };
        };
        countTime = setInterval(timer, 1000);
    };

    // PROGRESS BAR 
    const progressBar = document.querySelector(".progressbar");
    let progressLine = 0;
    const startProgress = (widthBar) => {
        const widthProgessBar = () => {
            widthBar -= 1.66666665;

            progressBar.style.width = widthBar + "%";

            if (widthBar < 1) {
                clearInterval(progressLine);
            };
        };
        progressLine = setInterval(widthProgessBar, 1000);
    };

    startTime(60);
    startProgress(100);
    checkAnswer();

    // Exit Button 

    const exitButton = document.querySelector(".exitButton");

    const exitQuiz = () => {
        clearInterval(countTime);
        countTime = 0;

        getUserScore();

        scorePage.style.display = "flex";
        showUserscorePage();

        quizPage.classList.remove("show");
    };

    exitButton.addEventListener("click", exitQuiz);
};

// VALIDATION FORMULAIRE 
let nameErrorMessage = document.createElement("span");
let mailErrorMessage = document.createElement("span");
nameErrorMessage.textContent = "";
mailErrorMessage.textContent = "";

username.after(nameErrorMessage);
usermail.after(mailErrorMessage);

homePageForm.addEventListener("submit", storeUserData = (event) => {
    event.preventDefault();

    nameErrorMessage.classList.add("errorMessage");
    mailErrorMessage.classList.add("errorMessage");

    // const validUserName = new RegExp(/(?=.*[a-zA-Z.]{2,})/);
    const validUserMail = new RegExp(/(?=.*@)/);

    // const correctUserName = username.value.match(validUserName);
    const correctUserMail = usermail.value.match(validUserMail);
    if (username.value == "") {
        username.style.border = ".1em solid red";
        nameErrorMessage.textContent = "N’oubliez pas de renseigner votre nom avant de commencer le Quiz.";

    } else if (username.value.length < 2) {
        username.style.border = ".1em solid red";
        nameErrorMessage.textContent = "Votre nom doit contenir au moins 2 caractères !";

    } else {
        localStorage.setItem("user-name", username.value);
        nameErrorMessage.textContent = "";
        username.style.border = ".1em solid #028A3D";
    }

    if (usermail.value == "") {
        usermail.style.border = ".1em solid red";
        mailErrorMessage.textContent = "N’oubliez pas de renseigner votre email avant de commencer le Quiz."
    } else if (correctUserMail == null) {
        usermail.style.border = ".1em solid red";
        mailErrorMessage.textContent = "Votre adresse email n'est pas valide !"
    } else {
        localStorage.setItem("user-mail", usermail.value);
        mailErrorMessage.textContent = "";
        usermail.style.border = ".1em solid #028A3D";
    };

    if (username.value != null && username.value.length >= 2 && correctUserMail != null) {
        homePage.style.display = "none";
        quizPage.classList.add("show");
        homePageForm.reset();
        showQuestionsFunction(0);
    };
});

// Display score page 
const showUserscorePage = (event) => {
    document.title = "JavaScript Quiz APP | Score";

    const userName = localStorage.getItem("user-name"); // get our name in localStorage 
    const userMail = localStorage.getItem("user-mail"); // get our Email in localStorage 

    scorePage.innerHTML =
        `<h2 class="username">${userName}</h2>` +
        `<p class="usermail">${userMail}</p>` +
        `<div class="icon__container">
            <p><i class="lni "></i></p>
        </div>` +
        `<div class="userscore__container">
        <p class="userscore">${userScore}/15</p>
        </div>` +
        `<button class="backToHome">Accueil</button>`;

    const icon__container = document.querySelector(".icon__container");
    const lasIcon = document.querySelector(".lni");

    if (userScore <= 7) {
        icon__container.classList.add("failed");
        lasIcon.classList.add("lni-cross-circle");


    } else {
        icon__container.classList.add("success");
        lasIcon.classList.add("lni-checkmark-circle");
    };

    // Accueil button

    const backToHome = document.querySelector(".backToHome");

    backToHome.addEventListener("click", homeReturn = () => {
        window.location.reload();
    });
};