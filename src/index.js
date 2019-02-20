console.log('DOM has been fully loaded')
console.table(gifts)

// Query Selectors
const filterInput = document.querySelector("#filter-input");
const submitBtn = document.querySelector("#gift-form-button");
const nameInput = document.querySelector("#gift-name-input");
const idInput = document.querySelector("#gift-id-input");
const imageInput = document.querySelector("#gift-image-input");
const formEl = document.querySelector("#gift-form");
const ulEl = document.querySelector('.gift-list');



const renderGifts = (gifts) => {
  clearGifts();
  gifts.forEach(renderGift)
}

const clearGifts = () => {
  while (ulEl.children.length > 0) {
    ulEl.removeChild(ulEl.querySelector('li'));
  }
}

// display each gift (used in fn renderGifts)
const renderGift = gift => {
  // create li elememt
  let li = document.createElement('li');
  // set innerText to gift.name
  li.innerHTML = gift.name;
  li.id = `gift-${gift.id}`;
  // add li to list element
  ulEl.appendChild(li);

  // create edit button
  let liEditBtn = document.createElement('span');
  liEditBtn.innerHTML = "📝"
  liEditBtn.className = "gift-Edit-button"

  liEditBtn.addEventListener('click', () => editGift(gift));
  li.appendChild(liEditBtn)

  // create delete button
  let liDeleteBtn = document.createElement('span');
  liDeleteBtn.innerHTML = "🗑"
  liDeleteBtn.className = "gift-delete-button"
  // liDeleteBtn.style = {	border: none; background: none; }

  liDeleteBtn.addEventListener('click', () => deleteGift(gift));
  li.appendChild(liDeleteBtn)
}

// display gifts 
renderGifts(gifts) //create lis and delete btn

// event listeners
filterInput.addEventListener('input', searchGifts);
formEl.addEventListener('submit', createGift);

