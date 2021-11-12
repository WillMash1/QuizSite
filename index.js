const buttonOne = document.querySelector('#buttonOne');
const buttonTwo = document.querySelector('#buttonTwo');
const buttonThree = document.querySelector('#buttonThree');
const buttonFour = document.querySelector('#buttonFour');
const question = document.querySelector('h3');

const buttons = [buttonOne,buttonTwo,buttonThree,buttonFour];

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

//Clean up the quiz class
//Rewrite the class so that the buttons for right and wrong answers are random
//Set up the class so that I would only need to create two new arrays(questions/answers) in order to make a new quiz
const quiz = new QuizClass(correctAnswers,wrongAnswers, currentQuestion, questions, answers, question,buttonOne,buttonTwo,buttonThree,buttonFour);
//combine all of these into one function called startGame(currentQuestion,answers,buttons) with three parameters
//quiz.nextQuestion(currentQuestion)
quiz.setAnswers(currentQuestion,answers,buttons);
quiz.startGame();