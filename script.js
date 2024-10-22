const inputIds = ["pounds", "years", "percentage", "repayment", "interestOnly"];
const inputList = inputIds.map((id) => document.getElementById(id));

//------------ ERRORS -------------------//

const mortgageError = document.getElementById("mortgage-error");
const termError = document.getElementById("term-error");
const percentageError = document.getElementById("percentage-error");
const radioError = document.getElementById("radioError");

//------------ BUTTONS -------------------//

const poundButton = document.querySelector(".pound-button");
const yearsButton = document.querySelector(".years-button");
const percentageButton = document.querySelector(".percentage-button");
const submitButton = document.querySelector(".calculate-button");

//------------ INPUT CONTAINERS -------------------//

poundInputContainer = document.getElementById("poundContainer");
yearsInputContainer = document.getElementById("yearsContainer");
percentageInputContainer = document.getElementById("percentageContainer");

inputList.forEach((input) => {
  input.addEventListener("blur", (e) => {
    if (input.id === "repayment" || input.id === "interestOnly") return;
    if (isNaN(Number(e.target.value)) && e.target.value !== "") {
      switch (input.id) {
        case "pounds":
          mortgageError.classList.remove("hidden");
          poundButton.style.background = "hsl(4, 69%, 50%)";
          poundButton.style.color = "#fff";
          poundInputContainer.style.border = "1px solid hsl(4, 69%, 50%)";
          break;
        case "years":
          termError.classList.remove("hidden");
          yearsButton.style.background = "hsl(4, 69%, 50%)";
          yearsButton.style.color = "#fff";
          yearsInputContainer.style.border = "1px solid hsl(4, 69%, 50%)";
          break;
        case "percentage":
          percentageError.classList.remove("hidden");
          percentageButton.style.background = "hsl(4, 69%, 50%)";
          percentageButton.style.color = "#fff";
          percentageInputContainer.style.border = "1px solid hsl(4, 69%, 50%)";
          break;
        default:
          break;
      }
    }
  });
});

inputList.forEach((input) => {
  input.addEventListener("focus", () => {
    switch (input.id) {
      case "pounds":
        mortgageError.classList.add("hidden");
        break;
      case "years":
        termError.classList.add("hidden");
        break;
      case "percentage":
        percentageError.classList.add("hidden");
        break;
      case "repayment":
        radioError.classList.add("hidden");
        break;
      case "interestOnly":
        radioError.classList.add("hidden");
        break;
      default:
        break;
    }
  });
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const repaymentRadioButton = inputList.find(
    (button) => button.id === "repayment"
  );
  const interestOnlyRadioButton = inputList.find(
    (button) => button.id === "interestOnly"
  );
  if (!repaymentRadioButton.checked && !interestOnlyRadioButton.checked) {
    radioError.classList.remove("hidden");
  }
});
