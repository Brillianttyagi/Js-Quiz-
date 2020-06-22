function submitAnswers(){
	var total = 5;
	var score = 0;

	//Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    //Validation

    for (var i = 1; i <= 5; i++) {
    	if(eval('q'+i) == null || eval('q'+i) == ''){
	    	alert('You missed question '+i);
	    	return false;
    	}
    }

    //Set Answer
    var answers = ["a","d","a","b","a"];

    //Check Answer
    for(var i=0;i<5;i++){
	    if(eval('q'+(i+1)) == answers[i]){
	    	score++;
	    }
	}

	//Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>Result: You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';

	alert('You scored '+score+' out of '+total);

	return false;

 }

   
