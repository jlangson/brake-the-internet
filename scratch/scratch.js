//duration of reveal is steps * delay
//I recommend keeping the pause at <= 0.2 opacity. Past that the website is usable
//so slowly going from 0.2 to 1.0 doesn't hinder the user that much

function slowReveal(steps, delay, opacity_step, final_pause){
	opacity = 0;
	for(i=0; i < steps; i++){
  	setTimeout(() => {document.body.style.opacity=opacity; opacity += opacity_step; console.log("opacity=" + opacity)},delay*i);
  }
  
 //normally, the slowReveal will stop < 0.2 opacity so we want to fully show the page after the pause
  setTimeout(() => {document.body.style.opacity=1;}, steps*delay+final_pause);
}


//good examples

slowReveal(15, 2000, 0.01, 1000); //finishes at 0.15 opacity


slowReveal(15, 2000, 0.01, 10000); //finishes at 0.15 opacity with a frustrating 10 second pause
