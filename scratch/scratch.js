//body = document.body;
//body.style.background="blue";
//body.style.opacity=0;
function slowReveal(total_time, interval){
	opacity = 0;
	for(i=0; i < total_time; i++){
  	setTimeout(() => {document.body.style.opacity=opacity; opacity += 0.1; console.log(i)},interval*i);
  }
}

slowReveal(10, 2000);
