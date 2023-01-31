import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const imgContainer = document.querySelector(".gallery");

const cardsMarkup = createColorCardsMarkup(galleryItems);

imgContainer.insertAdjacentHTML("beforeend", cardsMarkup);

imgContainer.addEventListener("click", onImgContainerClick);

function createColorCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}
function onImgContainerClick(e) {
  e.preventDefault();
  const isImgEl = e.target;

  const imgEl = isImgEl.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${imgEl}" width="800" height="600">
    `);

  instance.show();
  // instance.close()
}
