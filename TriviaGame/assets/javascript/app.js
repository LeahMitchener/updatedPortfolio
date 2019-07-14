$("#start").on("click", function() {
  for(var i=0;i<questions.length;i++){
      $('#subwrapper').append('<h2>'+questions[i].questions+ '</h2'>)
      for(var j=0;j<questions[i].answers.length;j++){
          $("#subwrapper").
      }
  }
    $("subwrapper").remove();
});

var questions = [{
    question: "In 'Chapter One', what was the name of the young boy who vanished in Hawkins, Indiana?", 
    answers: ["Jack Sawyer", "Will Byers", "Davis Garraty", "Benny Hammond"]
    correctAnswer: "Will Byers"
}, {
    question: "As seen written on the screen, in what year did season one take place?", 
    answers: ["1967", "1983", "1955", "2001"]
    correctAnswer: "1983"
}, {
    question: "Which of the young boys allowed Eleven to stay at his house as she hid from the Hawkins Lab and Dr. Brenner?", 
    answers: ["Dustin", "Mike", "Lucas", "Jonathan"]
    correctAnswer: "Mike"
}, {
    question: "Nancy Wheeler's friend Barb was taken during a get-together at Steve Harrington's house.", 
    answers: ["True", "False"]
    correctAnswer: "True"
}, {
    question: "Joyce was able to communicate with her son through the use of which of these?", 
    answers: ["Fire", "Ouija Board", "Automatic", "Electricity"]
    correctAnswer: "Electricity"
}, {
    question: "Who broke into the government lab in Hawkins, and found the entrance to the creature's world in 'Chapter Five'?", 
    answers: ["Joyce", "Chief Hopper", "Steve", "Lonnie"]
    correctAnswer: "Chief Hopper"
}, {
    question: "Of these choices, who was the first to enter the Upside Down?", 
    answers: ["Joyce", "Dustin", "Hopper", "Nancy"]
    correctAnswer: "Hopper"
}, {
    question: "In 'Chapter Seven', who advised Dustin and the boys on how to make a sensory deprivation tank?", 
    answers: ["Lonnie Byers", "Ted Wheeler", "Dr.Brenner", "Mr. Clarke"]
    correctAnswer: "Mr. Clarke"
}, {
    question: "Eleven found Barb was still alive when she entered the Upside Down in 'Chapter Seven: The Bathtub'.", 
    answers: ["True", "False"]
    correctAnswer: "False"
}, {
    question: "Which of these did *not* happen in the season finale 'Chapter Eight: The Upside Down'?", 
    answers: ["Will was brought back alive Joyce and Hopper entered the Upside Down", "Jonathan was killed inside the Upside Down", "Jonathan, Steve, and Nancy fought the creature at Jonathan's house"]
    correctAnswer: "Jonathan, Steve, and Nancy fought the creature at Jonathan's house"
}, {

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0)(
            console.log("Time's Up!");
            game.done();
        )
    },
    start: function()
}