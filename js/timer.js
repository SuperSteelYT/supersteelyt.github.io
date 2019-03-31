let ready = false;

function timer()
{
	let countDownDate = new Date("").getTime();

  	let now = new Date().getTime();

  	let distance = countDownDate - now;

  	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  	let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  	if (!ready) return document.getElementById("timer").innerHTML = "coming soon";

  	document.getElementById("timer").innerHTML = days + " days, " + hours + " hours, "
  		+ minutes + " minutes, and " + seconds + " seconds remaining";
    
  	if (distance < 0) 
  	{
    	clearInterval(x);
    	document.getElementById("timer").innerHTML = "open now";
  	}

	var x = setInterval(timer, 1000);
}