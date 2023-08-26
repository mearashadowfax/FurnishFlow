// jQuery code
$(document).ready(function () {
  // Add event listener to the button
  $(".btn-toggle").on("click", function () {
    // Toggle the collapse state of the target element
    $($(this).data("bs-target")).collapse("toggle");

    // Toggle the visibility of the plus and dash icons
    $(this).find(".bi-plus-lg, .bi-dash-lg").toggle();
  });

  // Add click event handler for the clear filters button
  $("#clear-filters-btn").on("click", function () {
    $(".form-check-input").prop("checked", false);
    $("#pricerange").val(0);
    $("#pricetext").text("0");
  });

  const events = ["input", "change"];

  $.each(events, function (k, v) {
    $("#pricerange").on(v, function () {
      let priceValue = $("#pricerange").val();
      $("#pricetext").text(priceValue + "$");
    });
  });
});
// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const searchResultsContainer = document.getElementById(
    "searchResultsContainer"
  );
  const searchButton = document.querySelector(".search-btn");
  const searchForm = document.querySelector("#searchForm");
  const iconButtons = document.querySelectorAll(".icon-btn");

  // Hide the search bar and show the icons by default
  searchForm.classList.add("hide");
  for (let iconButton of iconButtons) {
    iconButton.classList.remove("hide");
  }

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

  function updateSearchResults(query) {
    if (query === "") {
      searchResults.innerHTML = "";
      return;
    }

    const matchingItems = items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    // Clear the search results container
    searchResults.innerHTML = "";

    if (matchingItems.length > 0) {
      searchResultsContainer.style.display = "block";
      matchingItems.forEach((item, index) => {
        const resultItem = document.createElement("li");
        resultItem.innerHTML = `<a href="${item.url}" class="search-result">${item.title}</a>`;
        resultItem.classList.add(index % 2 === 0 ? "even" : "odd");
        searchResults.appendChild(resultItem);
      });
    } else {
      searchResultsContainer.style.display = "block";
      const noMatchItem = document.createElement("li");
      noMatchItem.innerHTML = "No matching items found";
      noMatchItem.classList.add("even");
      searchResults.appendChild(noMatchItem);
    }
  }

  // Event listener for input changes in the search bar
  searchInput.addEventListener("input", function () {
    updateSearchResults(this.value);
    // Adjust the position of the search results container
    const searchInputRect = searchInput.getBoundingClientRect();
    searchResultsContainer.style.top = `${searchInputRect.bottom}px`;
    searchResultsContainer.style.left = `${searchInputRect.left}px`;
  });

  // Event listener for clicking the search button
  searchButton.addEventListener("click", function () {
    searchForm.classList.toggle("show");
    for (let iconButton of iconButtons) {
      iconButton.classList.toggle("hide");
    }
  });

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
