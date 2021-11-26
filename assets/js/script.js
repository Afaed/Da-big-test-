var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
quizstart = document.getElementById('quizstart')

quizstart.InnerHtml = function quizstart() {
    function myquestion() {
        const myQuestions = [
        {
          question: "Who invented JavaScript?",
          answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
          },
          correctAnswer: "c"
        },
        {
            question: "What is an array?",
            answers: {
                a: "It containsnumberz",
                b: "It stores data",
                c: "It contains values",
                d: "All of the above",

            },
            correctAnswer: "d"
        }]
        function buildQuiz() {
        const output= [];
        myquestion.forEach(
            (currentQuesiton, QuestionNumber) => {
                const answers = [];
                for(letter in myQuestions.answers){}
            }
        }
    }
    
function countdown() {
    var timeLeft = 5 ;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      
      if (timeLeft < 0) {
        clearInterval(timeInterval) //telss the proram when to end this specific fuction.
        displayMessage();
      }else {
        timerEl.textContent = timeLeft;
        timeLeft--;
        }
    }, 10); //Function that tells the pc how fast make sure you clear the interval first. as shown above
    }
}
function showResults() {};
countdown()
quizstart(
    myQuestions (),

);

//event listeners

submitButton.addeventListener('click', showResults)