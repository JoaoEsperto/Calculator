const nrButtons = document.getElementsByClassName("btn-nr");
const input = document.getElementById("main-input");

for (let button of nrButtons) {
    button.addEventListener("click", () => {
        input.value += button.textContent;
    })
}
