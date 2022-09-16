import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const images = galleryItems
  .map((img) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${img.original}">
        <img
          class="gallery__image"
          src="${img.preview}"
          data-source="${img.original}"
          alt="${img.description}"
        />
      </a>
    </div>`;
  })
  .join("");

galleryRef.innerHTML = images;

galleryRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const imgBigRef = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${imgBigRef}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        galleryRef.addEventListener("keydown", onEscClick);
      },

      onClose: (instance) => {
        galleryRef.removeEventListener("keydown", onEscClick);
      },
    }
  );

  instance.show();

  function onEscClick(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
