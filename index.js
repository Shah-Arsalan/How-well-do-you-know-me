var readlinesync = require('readline-sync');
console.log("This game will test your knowledge about how much you know me.")
console.log("-----------------------------------------------")
console.log("Each right answer will give you a +1\n\nPlay the game and test our bond")
console.log("-----------------------------------------------")
console.log("How to play?\n")
console.log("Answer with a,b,c,d (use smallcase only)")
console.log("-----------------------------------------------")
 var score = 0;
 function quiz(question,answer){
    var answerByUser = readlinesync.question(question)
    if(answerByUser=== answer){
      console.log("The answer is right")
      score ++;
    }
    else{
      console.log("The answer is wrong")
    }
    console.log("Your score : " + score)
    console.log("--------------------------\n")
 }


 
 var questions = [  firstQuestion ={
    question : "What is my first name in real life?\na.Arsalan\nb.Shah\nc.Hussian\nd.Syed\nYour Answer : ",
  
    answer: "a"
  },

  secondQuestion ={
    question : " Which is my favourite movie?\na.Tamsha\nb.ZNMD\nc.Ye Jawani Hai Deewani\nd.The Harry Potter Series\nYour Answer : ",
    answer: "a"
  },


 thirdQuestion ={
    question : "My favourite destination?\na.Croatia\nb.New Zealand\nc.Scotland\nd.Iceland\nYour Answer : ",
    answer: "a"
  }
,
fourthQuestion ={
    question : "Which of the following is my favourite hobby?\na.Watching Movies\nb.Writing Poems\nc.Trekking\nd.Fishing\nYour Answer : ",
    answer: "b"
  }
,

 fifthQuestion ={
    question : "Which is the first thing on my bucket list?\na.To do a deep sea dive\nb.To learn how to paly the guitar\nc.To visit Bhutan\nd.To skydive\nYour Answer : ",
    answer: "d"
  }
  ,
  
  sixthQuestion ={
    question : "What is my personality type :?\na.INFP\nb.ENTP\nc.ISFJ\nd.ENFP\nYour Answer : ",
    answer: "a"
  }
  ,
  seventhQuestion ={
    question : "Who is my favourite movie director?\na.Christopher Nolan\nb.Imtiaz Ali\nc.Quentin Tarantino\nd.Anurag Kashyap\nYour Answer : ",
    answer: "b"
  }
  ,
  eighthQuestion ={
    question : "Who is my favourite marvel character?\na.Groot\nb.Tony Stark\nc.Rocket\nd.Thor\nYour Answer : ",
    answer: "a"
  }
  ,
  ninthQuestion ={
    question : "My favourite music genre?\na.Rock \nb.Pop\nc.Rap\nd.Anything that sounds good\nYour Answer : ",
    answer: "d"
  }
  ,
  finalQuestion ={
    question : "Who is my favourite cricketer?\na.Kane Williamson\nb.Virat Kohli\nc.Ab de Villiars\nd.Babar Azam\nYour Answer : ",
    answer: "a"
  }
  
  ]

 for (i=0; i<questions.length; i++){
   var currentQuestion = questions[i]
   quiz(currentQuestion.question , currentQuestion.answer)

 }


var highscores = [
  arsalan = {
score : "10"
  },

  ankit ={
    score : "10"
  },

  anjum = {
    score : "10"
  }
]

console.log("Your final Score is : " + score)
console.log("\n-------------------------------------\n")
 console.log("People who know me the most:")
 console.log("Arsalan :" + arsalan.score  )
 console.log("Ankit :" + ankit.score  )
 console.log("Anjum :" + anjum.score  )
console.log("\n-------------------------------------\n")
if (score ==10){
  console.log("We could me soulmates ... HaHa Just Kidding\n")
  
  console.log("Screenshot your result and send it to me , I'll add you to the list of people who know me the most")}
