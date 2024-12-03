// DIGITAL CLOCK PROGRAM

// create a function
function updateClock(){
// get current time
   const  now = new Date();
    // get hour use get hour method, 2 digit string use toString. padstart method first 2 digits start with zero
    let  hours = now.getHours();
    // AM/PM i if hours greater equal 12 PM else AM
    const meridiem = hours >= 12 ? "PM" : "AM";
    // reassign hours
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    // get minute use get minutes method
    const minutes = now.getMinutes().toString().padStart(2,0);
    // get second use get second method
    const seconds = now.getSeconds().toString().padStart(2,0);
    // how we want to arrange clock time string
    const timeString = `${hours}:${minutes}:${seconds}
    ${meridiem}`;
    // select the id clock
    // change the textContent to equal timeString
    document.getElementById('clock').textContent = timeString;


}

// call function
updateClock();
// to get clock to update use setInterval
// callback function updateClock after 1000 millisecond
setInterval(updateClock,1000);