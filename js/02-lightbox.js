import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imgContainer = document.querySelector(".gallery");

const cardsMarkup = createColorCardsMarkup(galleryItems);

imgContainer.insertAdjacentHTML("beforeend", cardsMarkup);

imgContainer.addEventListener("click", onImgContainerClick);

function createColorCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
    `;
    })
    .join("");
}
function onImgContainerClick(e) {
  e.preventDefault();
  const isImgEl = e.target.classList.contains("gallery__image");

  if (!isImgEl) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    // navText: ["&larr;", "&rarr;"],
  });
}
