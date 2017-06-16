// Create an HTML page that contains a text area and a button labeled Create.
const inputField = document.getElementById("input-field"),
	createBtn = document.getElementById("create-button"),
	container = document.getElementById("container");

// When the user enters in text into the text area and then clicks the create button,
// create a new card element in the DOM that includes it's own delete button
// You decide the height/width of the card.
createBtn.addEventListener("click", function() {
	if (inputField.value !== "") {
		console.log("hi");
		createCard();
	}
})

function createCard() {
	container.innerHTML +=
		`<div class="card">
			<p>${inputField.value}</p>
			<button class="delete-button">Delete</button>
		</div>`
}

// When the user clicks the Delete button, the containing card,
// and no other cards, should then be removed from the DOM.
// Not just made invisible, actually removed from the DOM.
window.addEventListener("click", function() {
	if (event.target.classList.contains("delete-button")) {
		event.target.parentNode.remove();
	}
})

