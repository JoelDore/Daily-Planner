// Assign current date/time to variables
let currentDate = moment().format("dddd, MMMM Do");
let currentTime = moment().format("HH:mm:ss");
updateTime();

// Update time every second
function updateTime() {
    setInterval(() => {
        currentTime = moment().format("HH:mm:ss");
    }, 1000);
}

// Update #currentDay textContent as 'dddd, MMMM Do'
$("#currentDay").text(currentDate);

// .saveBtn event listener
// // update local storage with stringified {btn id, textarea(id).text}

// If #id (24-hr) isBefore/isSame/isAfter current HH  
// Then update color of textarea to .past/.present/.future

// If current HH:mm:ss isSame 00:00:00
// Then reset localstorage, textareas, #currentDay
// (check Moment documentation for date change methods)


/* handle editing text, NOT saving, exiting textarea? */