
const giftsEl = document.querySelector('.gift-list')
const formEl = document.querySelector('#gift-form')
const inputNameEl = document.querySelector('#gift-name-input')
const inputImageEl = document.querySelector('#gift-image-input')
const filterEl = document.querySelector('#filter-input')

function addGift(text) {
  const giftEl = document.createElement('li')
  giftEl.className = 'gift'
  giftEl.innerHTML = text
  giftEl.addEventListener('click', () => {giftEl.remove()})
  giftsEl.appendChild(giftEl)
}

function filterGifts(text) {
   return gifts.filter(element => element.name.includes(text))
}

function loadGifts(gifts) {
  giftsEl.innerHTML = ""
  gifts.forEach(function (element) {
    addGift(element.name)
    }
  )
}



