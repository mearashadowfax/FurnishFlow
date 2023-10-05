import {
  toggleButtons,
  clearFiltersBtn,
  priceRange,
  priceText,
  formCheckInputs,
} from "./uiModule.js";

export function initializeFilters(clearFiltersBtn, priceRange, priceText) {
  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const plusIcon = this.querySelector(".bi-plus-lg");
      const dashIcon = this.querySelector(".bi-dash-lg");

      if (plusIcon.style.display === "none") {
        plusIcon.style.display = "inline-block";
        dashIcon.style.display = "none";
      } else {
        plusIcon.style.display = "none";
        dashIcon.style.display = "inline-block";
      }
    });
  });

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", function () {
      formCheckInputs.forEach(function (input) {
        input.checked = false;
      });
      priceRange.value = 0;
      priceText.textContent = "0";
    });
  }

  if (priceRange) {
    priceRange.addEventListener("input", function () {
      const priceValue = this.value;
      priceText.textContent = priceValue + "$";
    });
  }
}
