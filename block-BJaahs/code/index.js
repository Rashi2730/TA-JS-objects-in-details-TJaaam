function create(title,options,correctIndex){

    let ques = {};
    ques.title = title;
    ques.options = options;
    ques.correctAnswerIndex = correctIndex;
    
    ques.isAnswerCorrect = function(index){
        if(index == this.correctAnswerIndex){
      return true;
    }
    else{
      return false;
    }
    };
  
    ques.getCorrectAnswer = function(){
      return this.options[this.correctAnswerIndex];
    }

    return ques;
  }

  let ques1 = create('Where is the capital of Jordan?', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1);

  console.log(ques1.title);
  console.log(ques1.isAnswerCorrect(2));