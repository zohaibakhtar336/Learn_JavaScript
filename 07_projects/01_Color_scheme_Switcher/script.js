document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", (e) => {
        document.body.style.backgroundColor = e.target.id;
    });
});