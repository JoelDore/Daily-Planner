// Assign current date/time to variables
let currentDate = moment().format("dddd, MMMM Do");
let currentTime = moment().format("HH:mm:ss");
let currentHour = moment().format("HH");

const timeBlockArray = ['09', '10', '11', '12', '13', '14', '15', '16', '17'];

updateDateText();
updateTime();
loadEvents();
colorCode();

// Update #currentDay text
function updateDateText() {
    $("#currentDay").text(currentDate);
}

// Update time every second
function updateTime() {
    setInterval(() => {
        currentTime = moment().format("HH:mm:ss");
        // Clear localstorage, textareas, #currentDay at midnight
        if (currentTime === "00:00:00") {
            localStorage.clear();
            loadEvents();
            updateDateText();
        }
    }, 1000);
}

// Populate existing stored data to textareas
function loadEvents() {
    for (const key of timeBlockArray) {
        let savedEvent = localStorage.getItem(key)
        if (savedEvent !== null) {
            $(`#${key}`).val(savedEvent)
        } else {
            // clear text fields if storage has been cleared
            $(`#${key}`).val('')
        }
    }
}

function colorCode() {
    // For all time blocks:
    for (const id of timeBlockArray) {
        // If #id (24-hr) is before/same/after currentHour
        // Then update color of textarea to .past/.present/.future
        if (id < currentHour) {
            $(`#${id}`).addClass('past')
        } else if (id === currentHour) {
            $(`#${id}`).addClass('present')
        } else if (id > currentHour) {
            $(`#${id}`).addClass('future')
        }
    }
}

$(".saveBtn").click(function () {
    // get hour from button value
    let hour = $(this).val();
    // get corresponding textarea by id
    let eventText = $(`#${hour}`).val();
    // Update local storage with {hour: eventText}
    localStorage.setItem(hour, eventText)
})