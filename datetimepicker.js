
const operatingHours = ["10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00", "13:00 - 14:00", 
"14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", 
"17:00 - 18:00", "18:00 - 19:00", "19:00 - 20:00", 
"20:00 - 21:00", "21:00 - 22:00"];
const tdy = new Date();
const tmr = new Date(tdy);
tmr.setDate(tmr.getDate() + 1);
let tdydate = (tdy.getDate()<10?'0':'') + tdy.getDate();
let month = tdy.getMonth()+1;
let year = tdy.getFullYear();
let hour = tdy.getHours();
let dateNum = document.getElementById("datePickerBtn");
let hourNum = document.getElementById("timePickerBtn");
// let bookingDate = document.getElementById("bookingDateInput");
// let bookingHour = document.getElementById("bookingTimeInput");

console.log(hour);
if(10 < hour && hour < 21){
  dateNum.innerHTML = tdydate + " / " + month + " / " + year;
  // bookingDate.value = tdydate + " / " + month + " / " + year;
  console.log(operatingHours);
  hourNum.innerHTML = operatingHours[hour-9];
  // bookingHour.value = operatingHours[hour-9];
}
else if(21 <= hour && hour < 24){
  tmrdate = (tmr.getDate()<10?'0':'') + tmr.getDate();
  dateNum.innerHTML = tmrdate + " / " + month + " / " + year;
  // bookingDate.value = tmrdate + " / " + month + " / " + year;
  hourNum.innerHTML = operatingHours[0];
  // bookingHour.value = operatingHours[0];
}
else{
  dateNum.innerHTML = tdydate + " / " + month + " / " + year;
  // bookingDate.value = tdydate + " / " + month + " / " + year;
  hourNum.innerHTML = operatingHours[0];
  // bookingHour.value = operatingHours[0];
}




$(function() {
    // Create the calendar
    const calendar = $('<div id="datepicker"></div>').datepicker({
      // Set the date to today's date
      defaultDate: new Date(),
      // Allow the user to select a date
      showOn: 'focus',
      // Hide the calendar when a date is selected

      onSelect: function(dateText) {
        const date = moment(dateText, 'MM/DD/YYYY');
        const dateString = date.format('DD / MM / YYYY');

        // $('#bookingForm input[name="bookingDateInput"]').val(dateString);
        // Update the button text
        $('#datePickerBtn').text(dateString);
        // Close the modal
        $('#date-modal').modal('hide');
      },

      onClose: function(dateText){
        // const date = moment(dateText, 'MM/DD/YYYY');
        // const dateString = date.format('DD / MM / YYYY');
        $('#dateNum').text(dateString);
      }
    });

    // Insert the calendar into the modal body
    $('#date-modal .modal-body').append(calendar);
});


$(function() {
// Create a button for each element in the operatingHour array
const buttons = operatingHours.map(hour => {
    return $('<div>', {
      class: 'btn btn-light',
      text: hour,
      style: 'margin-top: 10px; color: #002347; text-align:center',
      click: function() {

        // $('#bookingForm input[name="bookingTimeInput"]').val(this.textContent);
        // Update the text on the modal button when a button is clicked
        $('#timePickerBtn').text(hour);
        // Close the modal
        $('#time-modal').modal('hide');

      }
    });
  });
const buttonGroups = chunk(buttons, 4);

  // Insert the button groups into the modal body
$('#time-modal .modal-body .row').append(buttonGroups.map(group => {
    return $('<div>', {
      class: 'col-4',
      append: group,
    });
  }));

// This function divides an array into groups of a given size
function chunk(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};
})

// // Listen for click events on the court divs
// $('#bookingForm .image-container').on('click', function() {
//   // Get the court number from the data-court-number attribute
//   var courtNumber = $(this).data('court-number');

//   // Set the value of the hidden input to the court number
//   $('#bookingForm input[name="court"]').val(courtNumber);

//   // Submit the form
//   $('#bookingForm').submit();
// });

