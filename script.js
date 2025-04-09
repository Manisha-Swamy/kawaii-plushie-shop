const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
      card.style.display = filter === "all" || card.classList.contains(filter)
        ? "block"
        : "none";
    });
  });
});



