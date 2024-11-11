








// Select the start button
var btn = document.querySelector("#srt");

// Select the stop button
var btnsop = document.querySelector("#sop");

// Select the reset button
var btnrst = document.querySelector("#rst");

// Select the elements that will display seconds, minutes, and hours
var sec = document.querySelector("#sec");
var min = document.querySelector("#min");
var h = document.querySelector("#h");
// Select the day element
var day = document.querySelector("#day");

// select date h3

var date = document.querySelector("#date");
//  select set div
var setDiv = document.querySelector(".set");

var inputtxt = document.querySelector("#input");
var set = document.querySelector("#set");





// Initialize variables to store the interval ID, seconds count, minutes count, hours count, and formatting helpers
var i;
var count = 0;
var hr = 0;
var mins = 0;










// Add an event listener to the start button
btn.addEventListener("click", function() {
    date.textContent = inputtxt.value;
    setDiv.style.display = "none";


if (!i) {
// Set up the interval to run every 1000 milliseconds (1 second)
i = setInterval(function() {
// Increment the formatting helper and set the decimal prefix for single-digit seconds


// Update seconds, and when seconds reach 10, reset and update minutes
if(count < 60) {
    count++;
    sec.textContent = (count < 10 ? "0" : "") + count;

} else if(mins < 60) {
    mins++;
    count = "00";
    sec.textContent = count; // Reset seconds
    min.textContent = (mins < 10 ? "0" : "") + mins;
}
// Update hours when minutes reach 24
else if(hr < 24) {
    mins = "00";
    count = "00";
    hr++;
    sec.textContent = count; // Reset seconds
    min.textContent = mins; // Reset minutes
    h.textContent = (hr < 24 ? "0" : "") + hr;
}
}, 1000)};
})
;






// Add an event listener to the stop button
btnsop.addEventListener("click", function() {
// Clear the interval, stopping the timer
clearInterval(i); 
i = null;

}); 









// Add an event listener to the reset button
btnrst.addEventListener("click",function  () {
    date.textContent = "Enter the date";
    inputtxt.value = "";
h.textContent = ( "00") 
min.textContent = ( "00")
setDiv.style.display = "block";
sec.textContent = ( "00") 
count = 0;
hr = 0;
mins = 0;

clearInterval(i); 
i = null;
})

