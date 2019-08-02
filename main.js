// Name input with greeting if true
const userName = 'Jorge';
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);
// Question input
const userQuestion = 'Will I get married?';
if (userName && userQuestion) {
console.log(`${userName} asked: ${userQuestion}`);
} else if (userQuestion) {
  console.log(`The user asked: ${userQuestion}`);
}  

// Eight Ball with ten possible outputs according to a random number and whether or not a question was asked
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
if (randomNumber === 0 && userQuestion) {
  eightBall = 'It is certain';
} else if (randomNumber === 1 && userQuestion) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2 && userQuestion) {
  eightBall = 'Reply hazy try again'; 
} else if (randomNumber === 3 && userQuestion) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4 && userQuestion) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5 && userQuestion) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6 && userQuestion) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 7 && userQuestion) {
  eightBall = 'Signs point to yes';
} else if (randomNumber === 8 && userQuestion) {
  eightBall = 'Maybe';
} else {
  eightBall = 'Ask a question.';
}
console.log(eightBall);
