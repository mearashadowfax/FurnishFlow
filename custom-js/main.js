import Scrollbar from "smooth-scrollbar";

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

document.addEventListener("DOMContentLoaded", function () {
  if (isDesktop) {
    Scrollbar.init(document.getElementById("my-scrollbar"));
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
