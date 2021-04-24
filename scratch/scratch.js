function slowReveal(steps, delay, opacity_step){
	opacity = 0;
	for(i=0; i < steps; i++){
  	setTimeout(() => {document.body.style.opacity=opacity; opacity += opacity_step; console.log("opacity=" + opacity)},delay*i);
  }
  
 //normally, the slowReveal will stop < 0.2 opacity so we want to fully show the page after the pause
  setTimeout(() => {document.body.style.opacity=1;}, steps*delay+1000);
}


//good examples

slowReveal(15, 2000, 0.01);
