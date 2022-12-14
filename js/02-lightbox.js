import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const images = galleryItems
  .map((img) => {
    return `<div class="gallery__item">
      <a class="gallery__item" href="${img.original}">
         <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
        </a>
    </div>`;
  })
  .join("");

galleryRef.innerHTML = images;

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
});
