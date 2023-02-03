import { note } from "../const.js";

const noteSection = document.querySelector(".content__note") ;

renderNoteSection() ;

function renderNoteSection() {
  const noteItems = note.map( item => `
  <div class="content__note--item">
  <div class="content__note--item--icon" style="display: flex;">
    <img src="${item.srcImg}" alt="">
  </div>
  <div class="content__note--item--title">${item.title}</div>
  <div class="content__note--item--text">${item.text}</div>
</div>
  ` ).join('') ;

  noteSection.innerHTML = noteItems ;
}