import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryGrid = document.querySelector(".gallery");

const galleryStr = galleryItems
  .map((item) => {
    // console.log(item.original)
    return ` <div class= gallery__item>
          <a class=“gallery__link” href= ${item.original} >
            
          <img
          class= gallery__image
          src= ${item.preview}
          data-source= ${item.original}
          alt= ${item.description} 
            />
    </a>
    </div>
        `;
  })
  .join(""); 

  galleryGrid.addEventListener("click", onClick)
  function onClick(event) {
    event.preventDefault();
  }
galleryGrid.insertAdjacentHTML("beforeend", galleryStr);


// const url = returnUrlOfBiggestImg
galleryGrid.addEventListener("click", returnUrlOfBiggestImg)
function returnUrlOfBiggestImg(evt) {
  if (evt.target.nodeName !== 'IMG') {
      return
   }
const bigImg = basicLightbox.create(`
   <img src= ${evt.target.dataset.source} class = modalOpenClass >
`)
bigImg.show()



}





