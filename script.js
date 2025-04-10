const optionBoxes = document.querySelectorAll(".option-box");

optionBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    optionBoxes.forEach((b) => {
      b.classList.remove("active");
      b.querySelector('input[type="radio"]').checked = false;
    });

    box.classList.add("active");
    box.querySelector('input[type="radio"]').checked = true;

    updateTotalPrice();
  });
});

function updateTotalPrice() {
  const selected = document.querySelector('input[name="unit"]:checked').value;
  const total =
    selected === "1" ? "10.00" : selected === "2" ? "18.00" : "24.00";
  document.getElementById("totalPrice").textContent = total;
}
