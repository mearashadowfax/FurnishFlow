import { items, searchInput, searchResultsContainer } from "./uiModule.js";

export function initializeSearch(
  searchForm,
  searchInput,
  searchButton,
  iconButtons,
  searchResults
) {
  // Hide the search bar and show the icons by default
  searchForm.classList.add("hide");
  for (let iconButton of iconButtons) {
    iconButton.classList.remove("hide");
  }

  // Event listener for clicking the search button
  searchButton.addEventListener("click", function () {
    searchForm.classList.toggle("show");
    for (let iconButton of iconButtons) {
      iconButton.classList.toggle("hide");
    }
  });

  // Event listener for input changes in the search bar
  searchInput.addEventListener("input", function () {
    const query = this.value;
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

    // Adjust the position of the search results container
    const searchInputRect = searchInput.getBoundingClientRect();
    searchResultsContainer.style.top = `${searchInputRect.bottom}px`;
    searchResultsContainer.style.left = `${searchInputRect.left}px`;
  });
}
