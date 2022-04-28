// Getting HTML Elements
const ratingDiv = document.querySelector(".rating");
const thankYouDiv = document.querySelector(".thank-you");
const ratingLi = document.querySelectorAll(".rating ul li");
const submitBtn = document.querySelector(".rating button");
const userRateSpan = document.querySelector(".thank-you .user-rate-p .user-rate");
const userHighestRate = document.querySelector(".thank-you .user-rate-p .highest-rate");

let rating = 0;

ratingLi.forEach((e) => {
	e.addEventListener("click", () => {
		addActive(e);
	});
});

submitBtn.addEventListener("click", () => {
	submitRating(rating);
});

function addActive(elem) {
	ratingLi.forEach((e) => {
		e.classList.remove("active");
	});
	elem.classList.add("active");
	rating = elem.textContent;
}

function submitRating(rating) {
	ratingDiv.style.display = "none";
	thankYouDiv.style.display = "block";
	userRateSpan.textContent = rating;
	userHighestRate.textContent = ratingLi.length;
}