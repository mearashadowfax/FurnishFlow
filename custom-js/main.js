import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

import {
  searchInput,
  searchResults,
  searchResultsContainer,
  searchButton,
  searchForm,
  iconButtons,
  toggleButtons,
  clearFiltersBtn,
  priceRange,
  priceText,
  isDesktop,
  items,
} from "./modules/uiModule.js";

import { initializeSearch } from "./modules/searchModule.js";

import { initializeFilters } from "./modules/filtersModule.js";

import "./modules/currentYear.js";

document.addEventListener("DOMContentLoaded", function () {
  Scrollbar.use(OverscrollPlugin);

  const isDesktop = !("ontouchstart" in window || navigator.maxTouchPoints > 0);

  if (isDesktop) {
    Scrollbar.init(document.getElementById("my-scrollbar"), {
      plugins: {
        overscroll: "bounce",
      },
    });
  }

  initializeSearch(
    searchForm,
    searchInput,
    searchButton,
    iconButtons,
    searchResults
  );
  initializeFilters(clearFiltersBtn, priceRange, priceText);

  // Event listener to close the search form if a click occurs outside
  document.addEventListener("click", function (event) {
    const isClickInside =
      searchForm.contains(event.target) || searchButton.contains(event.target);
    if (!isClickInside) {
      searchForm.classList.remove("show");
      for (let iconButton of iconButtons) {
        iconButton.classList.remove("hide");
      }
      searchInput.value = "";
      searchResultsContainer.style.display = "none";
      searchResults.innerHTML = "";
    }
  });
});
