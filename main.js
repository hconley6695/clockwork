var currentHour, currentMinute, currentSecond, mornHour;

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
	var mornMin = (currentMinute < 10 ? "0" : " ") + currentMinute;
	var mornSecond = (currentSecond < 10 ? "0" : " ") + currentSecond;
//return
var clockDisplay = mornHour + ":" + mornMin + ":" + mornSecond;
//console.log(clockDisplay);
//}

// var changeTime = setInterval(function() 
// //{
// 	//return (mornHour + ":" + currentMinute + ":" + currentSecond);
// 	//return 
// 	//formatTime;

 	var workingClock = document.querySelector('.working_time');
 	workingClock.textContent = clockDisplay;
 };

	setInterval(formatTime, 1000);
// }, 1000);



