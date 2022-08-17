var nHour = document.getElementById('spanHour');
var nMinute = document.getElementById('spanMinute');
var nSecond = document.getElementById('spanSecond');
let amorpm = document.getElementById('amorpm');

function setDate(){
    let date = new Date();
    let hours = date.getHours() % 12;
        hours = hours ? hours : 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    nHour.textContent = hours;
    nMinute.textContent = minutes;
    nSecond.textContent = seconds;
    if( hours >= 0 || hours <= 12){
        amorpm.textContent = "am";
    } else{
        amorpm.textContent = "pm";
    }
}
setInterval(setDate, 1000);