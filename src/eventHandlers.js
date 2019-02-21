
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM has been fully loaded')
    console.table(gifts)
    loadGifts(gifts)
})

formEl.addEventListener('submit', event => {
    event.preventDefault()
    addGift(inputNameEl.value)
    formEl.reset()
    }
)

filterEl.addEventListener('input', () => {
    const filtered = filterGifts(filterEl.value)
    loadGifts(filtered)
}
)