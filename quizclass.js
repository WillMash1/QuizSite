class QuizClass {
    constructor(correctAnswers,wrongAnswers, currentQuestion, questions, answers, question,buttonOne,buttonTwo,buttonThree,buttonFour){
        this.correctAnswers = correctAnswers;
        this.wrongAnswers = wrongAnswers;
        this.currentQuestion = currentQuestion;
        this.questions = questions;
        this.answers = answers;
        this.question = question;
        this.buttonOne = buttonOne;
        this.buttonTwo = buttonTwo;
        this.buttonThree = buttonThree;
        this.buttonFour = buttonFour;
    }


     
    startGame = function(){
        
            this.buttonOne.addEventListener('click', () => {
                switch(currentQuestion){
                    case 0: 
                        currentQuestion++;
                        this.setAnswers(currentQuestion, answers, buttons );
                        this.nextQuestion(currentQuestion);
                       // next(currentQuestion, answers, buttons );
                        break;
                    case 1: 
                        currentQuestion++;
                        this.setAnswers(currentQuestion, answers, buttons );
                        this.nextQuestion(currentQuestion);
                        break;
                    case 5: 
                    currentQuestion++;
                        this.setAnswers(currentQuestion, answers, buttons );
                        this.nextQuestion(currentQuestion);
                        break;
                    default:
                        console.log('false');
                }
            } );
         

         
            this.buttonTwo.addEventListener('click', () => {
            
            } );
         
        
         
            this.buttonThree.addEventListener('click', () => {
                switch(currentQuestion){
                    case 3: 
                    currentQuestion++;
                        this.setAnswers(currentQuestion, answers, buttons );
                        this.nextQuestion(currentQuestion);
                        break;
                    case 6: 
                    currentQuestion++;
                        this.setAnswers(currentQuestion, answers, buttons );
                        this.nextQuestion(currentQuestion);
                        break;
                    default:
                        console.log('false');
                }
            });
            
         
        
    
        
            this.buttonFour.addEventListener('click', () => {
                switch(currentQuestion){
                    case 2: 
                    currentQuestion++;
                    this.setAnswers(currentQuestion, answers, buttons );
                    this.nextQuestion(currentQuestion);
                    break;
                    case 4: 
                    currentQuestion++;
                    this.setAnswers(currentQuestion, answers, buttons );
                    this.nextQuestion(currentQuestion);
                    break;
                    case 7: 
                        this.question.textContent = 'Congratulations You Win!';
                    break;
                        default:
                            console.log('false');
                }
            } );
            
         
    }

                setAnswers = function(currentQuestion, answers, buttons) {
                    this.question.textContent = this.questions[currentQuestion];
                    let cq = currentQuestion;
                    const arr = answers[cq];
                    for(let i = 0;i<arr.length;i++){
                        buttons[i].innerHTML = ` <b>  ${arr[i]} </b> ` ;
                    }
                }
}