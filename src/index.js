//commonly used elements
const giftsEl = document.querySelector('#gifts-ul')
const inputEl = document.querySelector('#filter-input')
const formEl = document.querySelector('#gift-form')
const buttonEl = document.querySelector('#gift-form-button')
const giftNameEl = document.querySelector('#gift-name-input')
const giftImageEl = document.querySelector('#gift-image-input')
const giftEditEl = document.querySelector('#gift-edit-id')

//event handlers
//loads all inital gifts on page load
document.addEventListener('DOMContentLoaded', () => {
  loadGifts(gifts)
})
//clears gifts and loads ones matching users query
inputEl.addEventListener('input', e => {
  const query = inputEl.value
  clearGifts()
  const results = giftSearch(query)
  const resultsEl = document.createElement('p')
  resultsEl.innerText = `(${results.length}) results found matching '${query}'`
  giftsEl.appendChild(resultsEl)
  loadGifts(results)
})
//handles the gift form
formEl.addEventListener('submit', e => {
  //create gift
  if (buttonEl.innerText === 'Create Gift'){
    e.preventDefault()
    addGift(createGift(giftNameEl.value, giftImageEl.value))
  } else {
    e.preventDefault()
    debugger
    gift = gifts.find(gift => gift.id === parseInt(giftEditEl.value))
    gift.name = giftNameEl.value
    gift.image = giftImageEl.value
    clearGifts()
    loadGifts(gifts)
    buttonEl.innerText = 'Create Gift'
  }
  formEl.reset()
})


//helper funtions
//loads all the gifts onto the gift container
function loadGifts(gifts) {
  for(let gift of gifts){
    addGift(gift)
  }
}
//gets a subset of gift
function giftSearch(query){
  return gifts.filter(gift => gift.name.includes(query))
}
function clearGifts() {
  while (giftsEl.firstChild) {
    giftsEl.removeChild(giftsEl.firstChild)
  }
}
function addGift(gift) {
  const liEl = document.createElement('li')
  liEl.innerHTML = `<a href='${gift.image}' target='_blank'> ${gift.name} </a>`
  //add the delete button
  const delBtnEl = document.createElement('button')
  delBtnEl.innerText = '🗑'
  delBtnEl.className = 'gift-delete'
  liEl.appendChild(delBtnEl)
  //add the edit button
  const editBtnEl = document.createElement('button')
  editBtnEl.innerText = '📝'
  editBtnEl.className = 'gift-edit'
  liEl.appendChild(editBtnEl)

  editBtnEl.addEventListener('click', e => {
    giftNameEl.value = gift.name
    giftImageEl.value = gift.image
    buttonEl.innerText = 'Edit Gift'
    giftEditEl.value = gift.id
  })


  //add entire gift to container
  giftsEl.appendChild(liEl)
}
function createGift(name, image) {
  gifts.push({id: gifts.length+1, name, image })
  return gifts.slice(-1)[0]
}


document.addEventListener('click', e => {
  if (e.target.className === 'gift-delete'){
    e.target.parentElement.remove()
  }
})

