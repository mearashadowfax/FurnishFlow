const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchResultsContainer = document.getElementById(
  "searchResultsContainer"
);
const searchButton = document.querySelector(".search-btn");
const searchForm = document.querySelector("#searchForm");
const iconButtons = document.querySelectorAll(".icon-btn");
const toggleButtons = document.querySelectorAll(".btn-toggle");
const clearFiltersBtn = document.getElementById("clear-filters-btn");
const priceRange = document.getElementById("price-range");
const priceText = document.getElementById("price-text");
const formCheckInputs = document.querySelectorAll(".form-check-input");

// Check if the device is a desktop (non-touchscreen) device
const isDesktop = !("ontouchstart" in window || navigator.maxTouchPoints > 0);

// Array to store the original item data
const items = [
  // Define your item data here
  { title: "Citrus Chic Chair", url: "TimberFusion.html" },
  { title: "Artisan Wing Chair", url: "TimberFusion.html" },
  { title: "Azure Wingchair", url: "TimberFusion.html" },
  { title: "Timber Fusion Chair", url: "TimberFusion.html" },
  { title: "Wood-Metal Fusion", url: "TimberFusion.html" },
  { title: "Workshop Oasis", url: "TimberFusion.html" },
  { title: "Opulent Wing Chair", url: "TimberFusion.html" },
  { title: "Cozy Wood Seating", url: "TimberFusion.html" },
];

export {
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
  formCheckInputs,
  isDesktop,
  items,
};
