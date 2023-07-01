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
    // Reset the filters
    // Implement your logic to reset the filters
    // Example: If you have checkboxes for filters, you can uncheck all checkboxes
    // Replace 'form-check-input' with the appropriate class or selector for your filter checkboxes
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

  // Set the initial active link
  $("#menu .nav-link[data-content='description']").addClass("active");

  // Handle link clicks
  $("#menu .nav-link").on("click", function () {
    let contentSection = $(this).data("content");

    // Show the selected content and hide others
    $("#content div[data-section='" + contentSection + "']")
      .show()
      .siblings()
      .hide();

    // Set the active link
    $("#menu .nav-link.active").removeClass("active");
    $(this).addClass("active");
  });
});
// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  let searchButton = document.querySelector(".search-btn");
  let searchForm = document.querySelector("#searchForm");
  let iconButtons = document.querySelectorAll(".icon-btn");

  searchButton.addEventListener("click", function () {
    searchForm.classList.toggle("show");
    for (let iconButton of iconButtons) {
      iconButton.classList.toggle("hide");
    }
  });

  document.addEventListener("click", function (event) {
    const isClickInside =
      searchForm.contains(event.target) || searchButton.contains(event.target);
    if (!isClickInside) {
      searchForm.classList.remove("show");
      for (let iconButton of iconButtons) {
        iconButton.classList.remove("hide");
      }
    }
  });

  const myModal = document.getElementById("modalSignin");
  const myInput = document.getElementById("modal-content");

  myModal.addEventListener("shown.bs.modal", () => {
    myInput.focus();
  });

  const smallImages = document.querySelectorAll(".small-image");
  const bigImage = document.getElementById("bigImage");
  const initialBigImageSrc = bigImage.src;

  // Add click event listener to each small image
  smallImages.forEach((smallImage) => {
    smallImage.addEventListener("click", () => {
      // Get the source of the clicked small image
      const smallImageSrc = smallImage.src;

      // Get the source of the current big image
      const bigImageSrc = bigImage.src;

      // Set the clicked small image as the new big image
      bigImage.src = smallImageSrc;

      // Set the current big image as the small image
      smallImage.src = bigImageSrc;
    });
  });

  // Initialize Clipboard.js
  new ClipboardJS(".clipboard-btn");
});
