export function initializeMenu() {
  // Set the initial active link
  const initialActiveLink = document.querySelector(
    "#menu .nav-link[data-content='description']"
  );
  initialActiveLink.classList.add("active");

  // Handle link clicks
  const menuLinks = document.querySelectorAll("#menu .nav-link");
  const contentDivs = document.querySelectorAll("#content [data-section]");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const contentSection = this.getAttribute("data-content");

      // Show the selected content and hide others
      contentDivs.forEach((contentDiv) => {
        if (contentDiv.getAttribute("data-section") === contentSection) {
          contentDiv.style.display = "block";
        } else {
          contentDiv.style.display = "none";
        }
      });

      // Set the active link
      const activeLink = document.querySelector("#menu .nav-link.active");
      activeLink.classList.remove("active");
      this.classList.add("active");
    });
  });
}
