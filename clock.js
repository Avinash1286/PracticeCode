console.log("Hello")

function updateClock() {
    let currentTime = new Date();

    
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;
    
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;
    
    let timeOfDay = (currentHour < 12) ? "AM" : "PM";
    
 
    let timeConcat = currentHour + ":" + currentMinutes + ":" + currentSecond + " " + timeOfDay;
    document.getElementById("clock").innerHTML = timeConcat;

}

