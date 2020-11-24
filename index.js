var readLineSync = require("readline-sync");
var score = 0;
var questions = [
{question: "Who is my favorite superhero? ", answer: "Black Panther"},
{question: "Which is my favorite movie? ", answer: "Taken"},
{question: "Which is my favourite book? ", answer: "The Alchemist"},
{question: "Which is my favourite ice cream? ", answer: "Cookies and Cream"},
{question: "Which is my favourite festival? ", answer: "Diwali"},  
];
var highScores = [{name: "Prachi", score: 5},
{name: "Aditya", score: 5},
{name: "Vanshika", score: 4}]

var userName = readLineSync.question("Enter your name: ");
console.log("Welcome "+ userName + "\n" + "Lets see how well you know Prachi.."+ "\n");

function play(question, answer){
var userAnswer = readLineSync.question(question);
if(userAnswer.toUpperCase() === answer.toUpperCase()){
  score = score+1;
  console.log("Right!");
}else{ 
  console.log("Wrong!");
}
console.log("Your current score: ", score);
  console.log("----------------------------"+"\n");
}

for(var i=0; i<questions.length; i++){
play(questions[i].question, questions[i].answer);
}
if(score >= highScores[highScores.length-1].score){
  console.log("Congratulations!! You have made it to the list of top scorers. Your total score is "+ score+". Please send us a screenshot on abc@gmail.com, to get you name added into the following list.");
}else{
console.log("Congratulations, you scored: ", score);
}
console.log("\n"+"HighScores: ");
for(var i=0; i<highScores.length; i++){
console.log("Name: ",highScores[i].name,", Score: "+highScores[i].score);
}