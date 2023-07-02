let userInput = document.getElementById("birthdate");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("output");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let daysOfBirth = birthDate.getDate();
  let monthOfBirth = birthDate.getMonth() + 1;
  let yearOfBirth = birthDate.getFullYear();

  let today = new Date();

  let daysOfToday = today.getDate();
  let monthOfToday = today.getMonth() + 1;
  let yearOfToday = today.getFullYear();

  let yearInAge, monthInAge, daysInAge;

  // Year
  yearInAge = yearOfToday - yearOfBirth;

  // Month
  if (monthOfToday >= monthOfBirth) {
    monthInAge = monthOfToday - monthOfBirth;
  } else {
    yearInAge--;
    monthInAge = (12 + monthOfToday) - monthOfBirth;
  }

  // Days
  if (daysOfToday >= daysOfBirth) {
    daysInAge = daysOfToday - daysOfBirth;
  } else {
    monthInAge--;
    daysInAge = (getDaysInMonth(yearOfBirth, monthOfBirth) + daysOfToday) - daysOfBirth;
  }

  if (monthInAge < 0) {
    monthInAge = 11;
    yearInAge--;
  }

  // Output
  result.innerHTML = "You are <span>" + yearInAge + " Years</span>, <span>" + monthInAge + " Months</span> and <span>" + daysInAge + " Days</span> old!";
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}