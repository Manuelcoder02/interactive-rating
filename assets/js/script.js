const submitBtnEL = document.querySelector(".btn-submit");
const ratingOneEL = document.querySelector(".one");
const ratingTwoEL = document.querySelector(".two");
const ratingThreeEL = document.querySelector(".three");
const ratingFourEL = document.querySelector(".four");
const ratingFiveEL = document.querySelector(".five");

const feedbackStateEL = document.querySelector(".feedback");
const ratingStateEL = document.querySelector(".rating-state");
const ratingSelected = document.querySelector(".selected");

console.log(submitBtnEL, ratingOneEL);

ratingOneEL.addEventListener("click", function () {
  ratingOneEL.classList.toggle("selected-rating");

  ratingTwoEL.classList.remove("selected-rating");
  ratingThreeEL.classList.remove("selected-rating");
  ratingFourEL.classList.remove("selected-rating");
  ratingFiveEL.classList.remove("selected-rating");

  submitBtnEL.addEventListener("click", function () {
    ratingStateEL.classList.add("hidden");
    feedbackStateEL.classList.remove("hidden");
    ratingSelected.textContent = "You selected 1 out of 5";
  });
});
ratingTwoEL.addEventListener("click", function () {
  ratingTwoEL.classList.toggle("selected-rating");

  ratingOneEL.classList.remove("selected-rating");
  ratingThreeEL.classList.remove("selected-rating");
  ratingFourEL.classList.remove("selected-rating");
  ratingFiveEL.classList.remove("selected-rating");

  submitBtnEL.addEventListener("click", function () {
    ratingStateEL.classList.add("hidden");
    feedbackStateEL.classList.remove("hidden");
    ratingSelected.textContent = "You selected 2 out of 5";
  });
});
ratingThreeEL.addEventListener("click", function () {
  ratingThreeEL.classList.toggle("selected-rating");

  ratingTwoEL.classList.remove("selected-rating");
  ratingOneEL.classList.remove("selected-rating");
  ratingFourEL.classList.remove("selected-rating");
  ratingFiveEL.classList.remove("selected-rating");

  submitBtnEL.addEventListener("click", function () {
    ratingStateEL.classList.add("hidden");
    feedbackStateEL.classList.remove("hidden");
    ratingSelected.textContent = "You selected 3 out of 5";
  });
});
ratingFourEL.addEventListener("click", function () {
  ratingFourEL.classList.toggle("selected-rating");

  ratingTwoEL.classList.remove("selected-rating");
  ratingThreeEL.classList.remove("selected-rating");
  ratingOneEL.classList.remove("selected-rating");
  ratingFiveEL.classList.remove("selected-rating");

  submitBtnEL.addEventListener("click", function () {
    ratingStateEL.classList.add("hidden");
    feedbackStateEL.classList.remove("hidden");
    ratingSelected.textContent = "You selected 4 out of 5";
  });
});
ratingFiveEL.addEventListener("click", function () {
  ratingFiveEL.classList.toggle("selected-rating");

  ratingTwoEL.classList.remove("selected-rating");
  ratingThreeEL.classList.remove("selected-rating");
  ratingFourEL.classList.remove("selected-rating");
  ratingOneEL.classList.remove("selected-rating");

  submitBtnEL.addEventListener("click", function () {
    ratingStateEL.classList.add("hidden");
    feedbackStateEL.classList.remove("hidden");
    ratingSelected.textContent = "You selected 5 out of 5";
  });
});
