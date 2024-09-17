// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
console.log(galleryItems);

const container = document.querySelector(".gallery")

function markup(arr) {
    return arr.map(({preview,original,description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `).join("")
    
}

container.insertAdjacentHTML("beforeend", markup(galleryItems))

let gallery = new SimpleLightbox('.gallery a',{captionsData:"alt",captionDelay:250,animationSpeed:400,doubleTapZoom:3,captionPosition:"outside",})