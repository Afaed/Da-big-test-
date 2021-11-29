var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var quiz = document.getElementById('quizstart');
var actionContainerEL = document.createElement ("div");
var currentQuestionIndex = 0;
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
function Quiz(Questions) {
    this.score = 0;
    this.questions = Questions;
    this.questionIndex = 0
}

var myQuestions = [
    {
        question: "Who invented JavaScript?", 
        a: "Douglas Crockford", 
        b: "Sheryl Sandberg", 
        c: "Brendan Eich", 
        d: "Joe Ket",
        answer: "D"
    },
    {
        question: "Who invented JavaScript?", 
        a: "Douglas Crockford", 
        b: "Sheryl Sandberg", 
        c: "Brendan Eich", 
        d: "Joe Ket",
        answer: "D"
    },
    {
        question: "Who invented JavaScript?", 
        a: "Douglas Crockford", 
        b: "Sheryl Sandberg", 
        c: "Brendan Eich", 
        d: "Joe Ket",
        answer: "D"
    },
    {
        question: "Who invented JavaScript?", 
        a: "Douglas Crockford", 
        b: "Sheryl Sandberg", 
        c: "Brendan Eich", 
        d: "Joe Ket",
        answer: "D"
    },
    {
        question: "Who invented JavaScript?", 
        a: "Douglas Crockford", 
        b: "Sheryl Sandberg", 
        c: "Brendan Eich", 
        d: "Joe Ket",
        answer: "D"
    },
        ]
    function get () {
    return document.getElementById(quizstart)
}

function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
      test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("test_status").innerHTML = "Test completed";
      // resets the variable to allow users to restart the test
      pos = 0;
      correct = 0;
      // stops rest of renderQuestion function running when test is completed
      return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    // display the question
    test.innerHTML = "<h3>"+question+"</h3>";
    // display the answer options
    // the += appends to the data we started on the line above
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }
function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    // checks if answer matches the correct choice
    if(choice == questions[pos].answer){
      //each time there is a correct answer this value increases
      correct++;
    }
    // changes position of which character user is on
    pos++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
  }
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

//event listeners
quizsstart.addEventListner("click", Quiz)
localStorage.getItem("Initials")