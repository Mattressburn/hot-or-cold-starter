
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	//Function(mathrandom)
  	//create a new game function to reset everything
  	//validate function
  	//function to give feedback hot or cold
  	//tracks guesses and number of guesses
  	

  	function generateRandom() {
  		var randomNumber = Math.floor((Math.random() * 100) + 1);
  		return (randomNumber)
  	}


  	function userSubmit() {
  		//take user input
  		//run it through validation
  		//give feedback
  		//increase the count
  		//store guess


  	}

  	function compare(userInput, winningNumber) {
	//take user submit and compare to random number var
		if ( abs(userInput - winningNumber) > 50 ) {
			changeFeedback("You are ice cold")
		}


  	}

  	function changeFeedback(string) {
  		$("#feedback").text(string)
  	}

  	function changeCount() {
  		var count = $("#count").text()
  		count += count + 1
  		$("#count").text(count)
  	}

 	changeCount()

  	// var winningNumber = generateRandom()
  	// generateRandom();
});


