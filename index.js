var readlineSync = require('readline-sync');
var username = readlineSync.question('What is your name ?  ');
console.log('wecome to do you know me quiz'+" "+username);
var score = 0;
function play(question,answer){
  var useranswer = readlineSync.question(question);
  if(useranswer === answer){
    console.log('you are right!');
    score = score + 1;
  } else {
    console.log('you are wrong!');
    
  }

  console.log('your score is :'+score);
  console.log('-----------------------------');
 
}

var questions = [{question:'where do i live?',answer:'pune' },{question:'what is my age?',answer:'40'},{question:'where do I work?',answer:'Rudra Infotech'},{question:'Am I married ?',answer:'yes'},{question:'How many children I have?',answer:'2'}];
for(var i = 0;i < questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}


console.log ("YAY! you scored "+score);