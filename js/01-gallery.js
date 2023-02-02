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
  const isImgEl = e.target.classList.contains("gallery__image");

  if (!isImgEl) {
    return;
  }

  const imgDataSourceEl = e.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${imgDataSourceEl}" width="800" height="600">
    `);

  instance.show();

  imgContainer.addEventListener("keydown", closeModalWindowEscBtn);

  function closeModalWindowEscBtn(e) {
    if (e.code === "Escape") {
      instance.close(() =>
        imgContainer.removeEventListener("keydown", closeModalWindowEscBtn)
      );
    }
  }

  if (!instance.visible()) {
    imgContainer.removeEventListener("keydown", closeModalWindowEscBtn);
  }
}
