function validateForm() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  document.getElementById("dayError").innerText = "";
  document.getElementById("monthError").innerText = "";
  document.getElementById("yearError").innerText = "";

  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  // Reset invalid styles
  dayInput.classList.remove("invalid-input");
  monthInput.classList.remove("invalid-input");
  yearInput.classList.remove("invalid-input");
  document.getElementById("dayLabel").classList.remove("invalid-label");
  document.getElementById("monthLabel").classList.remove("invalid-label");
  document.getElementById("yearLabel").classList.remove("invalid-label");

  if (day.trim() === "") {
    document.getElementById("dayError").innerText = "This field is required";
    dayInput.classList.add("invalid-input");
    document.getElementById("dayLabel").classList.add("invalid-label");
  } else {
    if (day < 1 || day > 31 || day.length !== 2) {
      document.getElementById("dayError").innerText = "Must be a valid day";
      dayInput.classList.add("invalid-input");
      document.getElementById("dayLabel").classList.add("invalid-label");
    } else if (
      month === "02" &&
      (day > 29 || (day > 28 && !isLeapYear(year)))
    ) {
      document.getElementById("dayError").innerText =
        "Invalid day for February";
      dayInput.classList.add("invalid-input");
      document.getElementById("dayLabel").classList.add("invalid-label");
    } else if (
      (month === "04" || month === "06" || month === "09" || month === "11") &&
      day > 30
    ) {
      document.getElementById("dayError").innerText =
        "Invalid day for this month";
      dayInput.classList.add("invalid-input");
      document.getElementById("dayLabel").classList.add("invalid-label");
    }
  }

  if (month.trim() === "") {
    document.getElementById("monthError").innerText = "This field is required";
    monthInput.classList.add("invalid-input");
    document.getElementById("monthLabel").classList.add("invalid-label");
  } else {
    if (month < 1 || month > 12 || month.length !== 2) {
      document.getElementById("monthError").innerText = "Must be a valid Month";
      monthInput.classList.add("invalid-input");
      document.getElementById("monthLabel").classList.add("invalid-label");
    }
  }

  if (year.trim() === "") {
    document.getElementById("yearError").innerText = "This field is required";
    yearInput.classList.add("invalid-input");
    document.getElementById("yearLabel").classList.add("invalid-label");
  } else {
    if (year < 1900 || year > new Date().getFullYear() || year.length !== 4) {
      document.getElementById("yearError").innerText = "Must be a valid year";
      yearInput.classList.add("invalid-input");
      document.getElementById("yearLabel").classList.add("invalid-label");
    }
  }
}
// Function to check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function calculateAge(event) {
  event.preventDefault();

  validateForm();

  if (
    !document.getElementById("dayError").innerText &&
    !document.getElementById("monthError").innerText &&
    !document.getElementById("yearError").innerText
  ) {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    const birthDate = new Date(`${month}/${day}/${year}`);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthDate;

    const ageInDays = (ageInMilliseconds / (24 * 60 * 60 * 1000)) % 30.44;
    const ageInMonths =
      (ageInMilliseconds / (30.44 * 24 * 60 * 60 * 1000)) % 12;
    const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);

    document.getElementById("resultday").innerText = Math.floor(ageInDays);
    document.getElementById("resultmonth").innerText = Math.floor(ageInMonths);
    document.getElementById("resultyear").innerText = Math.floor(ageInYears);
  }
}
window.onload = function () {
  document.getElementById("ageCalculatorForm").reset();
};
