for (var i = 0;i<document.querySelectorAll(".drum").length;i++){

	// when button is clicked
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
	var buttonInnerHtml =  this.innerHTML;
	
	switchAudio(buttonInnerHtml);

})

}

//when key is pressed

document.addEventListener('keypress', function(event){
	switchAudio(event.key)
})

//switching audio

function switchAudio(exp) {
	
	switch(exp) {
		case 'e':
			var tom1 = new Audio("tom-1.mp3");
			tom1.play();
			break;
		case 'n':
			var tom2 = new Audio("tom-2.mp3");
			tom2.play();
			break;
		case 'j': 
			var tom3 = new Audio("tom-3.mp3");
			tom3.play();
		break;
		case 'o':
			var tom4 = new Audio("tom-4.mp3");
			tom4.play();
			break;
		case 'y':
			var crash = new Audio("crash.mp3");
			crash.play();
			break;
		case '!':
			var snare = new Audio("snare.mp3");
			snare.play();
			break;
		
		default:
			
			break;
	}
}

