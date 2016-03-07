var currentHour, currentMinute, currentSecond;

//var today = newDate();

//currentHour = today.getHours();
//currentMinute = today.getMinutes();
//currentSecond = today.getSeconds();

//first-defined what hour, minute, second were.  gave expressions
//sec--

function formatTime() {
	var today = new Date();

	currentHour = today.getHours();
	currentMinute = today.getMinutes();
	currentSecond = today.getSeconds();

	var mornHour = (currentHour < 10 ? "0" : " ") + currentHour;
	return (mornHour + ":" + currentMinute + ":" + currentSecond);
}

var changeTime = setInterval(function() {
	//return (mornHour + ":" + currentMinute + ":" + currentSecond);
	return formatTime;
}, 1000);

var workingClock = document.querySelector('.working_time');
workingClock.textContent = changeTime;


