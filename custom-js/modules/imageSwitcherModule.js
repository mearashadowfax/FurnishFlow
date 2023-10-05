export function initializeImageSwitcher() {
  const smallImages = document.querySelectorAll(".small-image");
  const bigImage = document.getElementById("bigImage");

  smallImages.forEach((smallImage) => {
    smallImage.addEventListener("click", () => {
      // Get the clicked small image's src and srcset attributes
      const smallImageSrc = smallImage.src;
      const smallImageSrcset = smallImage.getAttribute("srcset");

      // Store the current big image's src and srcset attributes
      const bigImageSrc = bigImage.src;
      const bigImageSrcset = bigImage.getAttribute("srcset");

      // Update the big image's src and srcset attributes
      bigImage.src = smallImageSrc;
      bigImage.setAttribute("srcset", smallImageSrcset);

      // Update the clicked small image's src and srcset attributes
      smallImage.src = bigImageSrc;
      smallImage.setAttribute("srcset", bigImageSrcset);
    });
  });
}
