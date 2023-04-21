// Get the reviews section
const reviewsSection = document.querySelector("#reviews");

// Render reviews function
function renderReviews() {
	// Clear the reviews section
	reviewsSection.innerHTML = "";

	// Loop through each review in reviewData array
	reviewData.forEach((review) => {
		// Create a review card element
		const reviewCard = document.createElement("div");
		reviewCard.classList.add("review-card");

		// Create name element
		const nameEl = document.createElement("h3");
		nameEl.textContent = review.name;
		reviewCard.appendChild(nameEl);

		// Create date element
		const dateEl = document.createElement("p");
		const dateObj = new Date(review.date);
		dateEl.textContent = `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
		reviewCard.appendChild(dateEl);

		// Create rating element
		const ratingEl = document.createElement("div");
		ratingEl.classList.add("rating");
		for (let i = 1; i <= 5; i++) {
			const star = document.createElement("span");
			if (i <= review.rating) {
				star.innerHTML = "&#9733;";
			} else {
				star.innerHTML = "&#9734;";
			}
			ratingEl.appendChild(star);
		}
		reviewCard.appendChild(ratingEl);

		// Create review element
		const reviewEl = document.createElement("p");
		reviewEl.textContent = review.review;
		reviewCard.appendChild(reviewEl);

		// Add the review card to the reviews section
		reviewsSection.appendChild(reviewCard);
	});
}

// Render the initial reviews
renderReviews();

// Get the form elements
const nameInput = document.querySelector("#name");
const dateInput = document.querySelector("#date");
const ratingInput = document.querySelector("#rating");
const reviewInput = document.querySelector("#review");

// Get the create button
const createButton = document.querySelector("#create");

// Add an event listener to the create button
createButton.addEventListener("click", () => {
	// Get the values of the form inputs
	const name = nameInput.value;
	const date = dateInput.value;
	const rating = parseInt(ratingInput.value);
	const review = reviewInput.value;

	// Create a new review object
	const newReview = { name, date, rating, review };

	// Add the new review to the reviewData array
	reviewData.push(newReview);

	// Clear the form inputs
	nameInput.value = "";
	dateInput.value = "";
	ratingInput.value = "";
	reviewInput.value = "";

	// Re-render the reviews
	renderReviews();
});
