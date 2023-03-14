
// Get the elements
const bookingTimeInput = document.getElementById("bookingHour");
const increaseButton = document.querySelector("#incrementButton");
const decreaseButton = document.querySelector("#decrementButton");
const noofhourInput = document.getElementById("noofhourInput");
count = 0;
noofhourInput.value = count

// // Add event listeners to the buttons
// increaseButton.addEventListener("click", function() {
// // Increase the hour by 1
// console.log("Hi");
// let currentTime = bookingTimeInput.value;
// let newTime = incrementTime(currentTime, 1);
// // bookingTimeInput.value = newTime;
// noofhourInput.innerHTML = parseInt(noofhourInput.value) + 1;
// bookingTimeInput.innerHTML = newTime;
// });

// decreaseButton.addEventListener("click", function() {
// // Decrease the hour by 1
// console.log("HiHi");
// let currentTime = bookingTimeInput.value;
// let newTime = incrementTime(currentTime, -1);
// bookingTimeInput.innerHTML = newTime;
// // bookingTimeInput.value = newTime;
// noofhourInput.innerHTML = parseInt(noofhourInput.value) - 1;
// });

// console.log(bookingTimeInput.innerHTML);
noofhourInput.innerHTML = 0;
function incrementTime() {
    
// Parse the time string and increment the hour
let [start, end] =  bookingTimeInput.innerHTML.split("-");
let [endHour, endMin] = end.split(":");
// startHour = parseInt(startHour) + increment;
endHour = parseInt(endHour) + 1;
// Ensure that the hour is in the correct range (0-24)
// startHour = (startHour + 24) % 24;
// endHour = (endHour + 24) % 24;
// Format the new time string
// start = `${startHour}.${startMin}`;
end = `${endHour}:${endMin}`;
bookingTimeInput.innerHTML = `${start}-${end}`;
count += 1;
noofhourInput.value = count;
}
