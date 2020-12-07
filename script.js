"use strict";

const toggleTextColor = document.querySelector(".darktext"); // changing text color
const switchBtn = document.querySelector(".switch"); // selecting toggle element
const bodyColorChanges = document.querySelector("body"); // selecting body

const changeTextColor = function () {
  toggleTextColor.classList.remove("darktext"); // creating function to change text color
};

switchBtn.addEventListener("click", changeTextColor); // changing text color with click event

switchBtn.addEventListener("click", function () {
  // changing body color with click event
  bodyColorChanges.style.backgroundColor = "white";
});

// Query Selector All returns as a array that's why use it with for / forEach
// Cards-container background color changes
const cardBgColorChange = document.querySelectorAll(".dark");

switchBtn.addEventListener("click", function () {
  cardBgColorChange.forEach((card) => {
    card.style.backgroundColor = "hsl(227, 47%, 96%)";
  });
});
