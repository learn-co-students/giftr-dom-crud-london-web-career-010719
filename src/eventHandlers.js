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

// create gift and push into "gifts" data
function createGift(event){
    event.preventDefault();
    let gift = gifts.find(g => g.id === parseInt(event.target.elements.id.value))

    if (event.target.elements.id.value === "" || !gift) {
      const name = nameInput.value;
      const image = imageInput.value;
      gifts.push({id: gifts.length+1, name: name, image: image})
    } else {
    
      gift.name = nameInput.value;
      gift.image = imageInput.value;
      submitBtn.innerHTML = "Create Gift";
    }
    formEl.reset();
    renderGifts(gifts)

  }

  // delete gift
  const deleteGift = (gift) => {
    gifts = gifts.filter(g => g.id !== gift.id) 
    // if gift(obj).id === gift's certain element's id, reject that obj.
    renderGifts(gifts)
  }

  // edit gift
  const editGift = (gift) => {
    submitBtn.innerHTML = "Edit Gift";
    
    // populate form
    idInput.value = gift.id;
    nameInput.value = gift.name;
    imageInput.value = gift.image;

  }
