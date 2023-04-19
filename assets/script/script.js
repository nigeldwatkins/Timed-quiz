// Adding the timer element to my script, 60seconds
var timeleft = 60;
var countdownTimer;

document.getElementById("start-btn").addEventListener("click", function() {
    countdownTimer = setInterval(function() {
        timeleft--;
        document.getElementById("timer").innerHTML = timeleft;
        if(timeleft <= 0) {
        clearInterval(countdownTimer);
        alert("Quiz timer up!");
    }
 }, 1000); 
});


 

