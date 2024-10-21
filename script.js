const inputIds = ["pounds", "years", "percentage", "repayment", "interestOnly"];
const inputList = inputIds.map((id) => document.getElementById(id));

//------------ ERRORS -------------------//

const mortgageError = document.getElementById("mortgage-error");
const termError = document.getElementById("term-error");
const percentageError = document.getElementById("percentage-error");
const radioError = document.getElementById("radio-error");

inputList.forEach((input) => {
  input.addEventListener("blur", (e) => {
    if (input.id === "repayment" || input.id === "interestOnly") return;
    if (isNaN(Number(e.target.value)) && e.target.value !== "") {
      switch (input.id) {
        case "pounds":
          mortgageError.classList.remove("hidden");
          break;
        case "years":
          termError.classList.remove("hidden");
          break;
        case "percentage":
          percentageError.classList.remove("hidden");
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
