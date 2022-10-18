let currentTagFilters = []
let allElementTags = document.querySelectorAll(".tag")
let temporaryText = document.querySelector(".searchBar h1")
let filtersDisplay = document.querySelector(".filters")
let clearTags = document.querySelector("#clearTags")
let allCards = document.querySelectorAll(".card")

let filterCards = () => {
	allCards.forEach((card) => {
		let cardTags = card.getAttribute("tags")

		currentTagFilters.forEach((tag) => {
			if (!cardTags.includes(tag)) {
				card.classList.remove("active")
			}			
		})
	})
}

allElementTags.forEach((el) => {
	el.onclick = () => {
		currentTagFilters.push(el.innerText)
		temporaryText.style.display = "none"

		let newTag = document.createElement("span")
		newTag.innerText = el.innerText
		filtersDisplay.appendChild(newTag)

		filterCards()
	}
})

clearTags.onclick = () => {
	filtersDisplay.innerHTML = ""
	temporaryText.style.display = "block"
	currentTagFilters = []
	allCards.forEach((card) => {
		card.classList.add("active")
	})
}