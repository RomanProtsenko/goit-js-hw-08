import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const list = document.querySelector('.gallery');
const itemsMarkup = createGalleryItems(galleryItems);
list.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItems(items) {
  return items.map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`
  }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionPosition: "bottom",
    captionsData: "alt",
    captionDelay: 250,
});