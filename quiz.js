
const questions = ['Who is the Captain of the Beast Pirates?', 
                    "Who is the captain of the Straw Hat Pirates", 
                    'How Many Seas Exist in One Piece',
                    'What is the Name of the Straw Hats First Ship?', 
                    'What is Luffy’s Bounty?', 
                    'What did Usopp become known as after defeating Sugar?',
                    'Who leads the revolutionary army?', 
                    'Who gave Luffy the Straw Hat?'  ];

const answers = [['Kaido', 'Big Mom', 'Shanks', 'Luffy' ],
                ['Luffy', 'Nami', 'Zoro', 'God Usopp'], 
                ['One', 'Eight', 'Six', 'Four'],
                ['The Sunny', 'Going Ferry', 'The Going Merry', 'Straw Ship '], 
                ['1 Billion', '2 Billion', '1.2 Billion', '1.5 Billion'],
                ['God Usopp', 'Mighty Usopp', 'Sniper King', 'Soge King'], 
                ['Demon', 'King', 'Dragon', 'Atomic Samurai'],
                    ['Rayleigh', 'Ace', 'Garp', 'Shanks']];

let correctAnswers = 0;
let wrongAnswers = 0;
let currentQuestion = 0;


class Quiz {


    constructor(){


    }

     buttonOne = document.querySelector('#buttonOne');
     buttonTwo = document.querySelector('#buttonTwo');
     buttonThree = document.querySelector('#buttonThree');
     buttonFour = document.querySelector('#buttonFour');
     question = document.querySelector('h3');
    
     buttons = [buttonOne,buttonTwo,buttonThree,buttonFour];
    
    
    nextQuestion = function(currentQuestion){
        question.textContent = questions[currentQuestion];
    }
    
    setAnswers = function(currentQuestion, answers, buttons) {
        let cq = currentQuestion;
        const arr = answers[cq];
        for(let i = 0;i<arr.length;i++){
            buttons[i].innerHTML = ` <b>  ${arr[i]} </b> ` ;
        }
    }
    
     nextQuestion(currentQuestion);
     setAnswers(currentQuestion, answers, buttons);
    
    buttonOne.addEventListener('click', () => {
        switch(currentQuestion){
            case 0: 
                currentQuestion++;
                setAnswers(currentQuestion, answers, buttons );
                nextQuestion(currentQuestion);
               // next(currentQuestion, answers, buttons );
                break;
            case 1: 
            currentQuestion++;
            setAnswers(currentQuestion, answers, buttons );
            nextQuestion(currentQuestion);
                break;
            case 5: 
            currentQuestion++;
            setAnswers(currentQuestion, answers, buttons );
            nextQuestion(currentQuestion);
                break;
            default:
                console.log('false');
        }
    } );
    
    buttonTwo.addEventListener('click', () => {
        
    } );
    
    buttonThree.addEventListener('click', () => {
        switch(currentQuestion){
            case 3: 
            currentQuestion++;
                setAnswers(currentQuestion, answers, buttons );
                nextQuestion(currentQuestion);
                break;
            case 6: 
            currentQuestion++;
                setAnswers(currentQuestion, answers, buttons );
                nextQuestion(currentQuestion);
                break;
            default:
                console.log('false');
        }
    });
    
    buttonFour.addEventListener('click', () => {
        switch(currentQuestion){
            case 2: 
            currentQuestion++;
            setAnswers(currentQuestion, answers, buttons );
            nextQuestion(currentQuestion);
            break;
            case 4: 
            currentQuestion++;
            setAnswers(currentQuestion, answers, buttons );
            nextQuestion(currentQuestion);
            break;
            case 7: 
                question.textContent = 'Congratulations You Win!';
            break;
                default:
                    console.log('false');
        }
    } );
}

    
