document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)

  // Query Selectors
  const filterInput = document.querySelector("#filter-input");
  const submitBtn = document.querySelector("#gift-form-button");
  const nameInput = document.querySelector("#gift-name-input");
  const imageInput = document.querySelector("#gift-image-input");
  const formEl = document.querySelector("#gift-form");

  // search / filter event handler
  function searchGifts(event) {
    const filteredGifts = gifts.filter(function(gift) {
      return gift.name.includes(event.target.value)
    })
    if (event.target.value !== '') {
      renderGifts(filteredGifts)
    } else {
      renderGifts(gifts)
    }
  }

  const renderGifts = (gifts) => {
    clearGifts();
    gifts.forEach(renderGift)
  }

  const clearGifts = () => {
    let ul = document.querySelector('.gift-list');
    while (ul.children.length > 0) {
      ul.removeChild(ul.querySelector('li'));
    }
  }

  // display each gift (used in fn renderGifts)
  const renderGift = gift => {
    let ul = document.querySelector('.gift-list');
    // create li elememt
    let li = document.createElement('li');
    // set innerText to gift.name
    li.innerHTML = gift.name;
    li.id = `gift-${gift.id}`;
    // add li to list element
    ul.appendChild(li);

    // create edit button
    let liEditBtn = document.createElement('button');
    liEditBtn.innerHTML = "Edit"
    liEditBtn.className = "gift-Edit-button"

    liEditBtn.addEventListener('click', () => editGift(gift)); 
    li.appendChild(liEditBtn)

    // create delete button
    let liDeleteBtn = document.createElement('button');
    liDeleteBtn.innerHTML = "Delete"
    liDeleteBtn.className = "gift-delete-button"

    liDeleteBtn.addEventListener('click', () => deleteGift(gift)); 
    li.appendChild(liDeleteBtn)

  }

  // create gift and push into "gifts" data
  function createGift(event){
    if (submitBtn.innerHTML === "Create Gift") {
      event.preventDefault();

      const name = nameInput.value;
      const image = imageInput.value;
      gifts.push({id: gifts.length+1, name: name, image: image})
      nameInput.value = ""
      imageInput.value = ""
      renderGifts(gifts)
    }
  }

  // delete gift
  const deleteGift = (gift) => {
    gifts = gifts.filter(g => g.id !== gift.id) // if gift(obj).id === gift's certain element's id, reject that obj.
    renderGifts(gifts)
  }

  // edit gift
  const editGift = (gift) => {
    console.log("working")

    submitBtn.innerHTML = "Edit Gift";
    
    // populate form

    nameInput.value = gift.name;
    imageInput.value = gift.image;

    // add event listener to form edit button?
    submitBtn.addEventListener('click', (event) => {
      if(submitBtn.innerHTML === "Edit Gift") {
        event.preventDefault();
        gift.name = nameInput.value;
        gift.image = imageInput.value;
        renderGifts(gifts)
        formEl.reset();
        submitBtn.innerHTML = "Create Gift";
      }
    });

  }

  
  // display gifts 
  renderGifts(gifts) //create lis and delete btn

  // event listeners
  filterInput.addEventListener('input', searchGifts);
  submitBtn.addEventListener('click', createGift);

})