const menuBtn = document.querySelector(".checkbtn");
const listDisplay = document.querySelector("ul");
const closeBtn = document.querySelectorAll(".list");

closeBtn.forEach((item) =>
	item.addEventListener("click", () => {
		listDisplay.classList.toggle("show");
	})
);

menuBtn.addEventListener("click", () => {
	listDisplay.classList.toggle("show");
});
