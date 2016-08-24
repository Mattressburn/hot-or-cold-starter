
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

    var winningNumber = generateRandom();
    
    //validate entry 
    function validateEntry(userInput) {
        if (userInput < 1 || userInput > 100) {
            changeFeedback('Not a Valid Number!')
            return false;
        }
        else if (isNan(userInput)) {
            return false;
        }
        else {
            return true
        }
    }
    

  		//take user input
  		//run it through validation
  		//give feedback
  		//increase the count
  		//store guess
        
        //listener for pressing button
        $('form').submit(function(event){
            var userInput = parseInt($('#userGuess').val())
            console.log("click worked")
            event.preventDefault();
            $("#userGuess").val("");
            var valid = validateEntry(userInput);
            if (valid) {
                changeCount();
                $('#guessList').append('<li>' + userInput + '</li>')
            } 
            else {
                changeFeedback("Please enter a number.");
            }
        }) 
        
                         
                         



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
  		var count = parseInt($("#count").text())
  		count += 1
  		$("#count").text(count)
  	}

//    function storeGuess() {
//        
//    }

    

  	// var winningNumber = generateRandom()
  	// generateRandom();
});


