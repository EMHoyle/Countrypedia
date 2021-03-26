const filterBtn = document.getElementById('filter')
const regionFilters = filterBtn.querySelectorAll('li')

filterBtn.addEventListener('click', () => {
  filterBtn.classList.toggle('open')
})

regionFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const value = filter.innerText
    const countryRegion = document.querySelectorAll('.country-region')

    countryRegion.forEach((region) => {
      if (region.innerText.includes(value) || value === 'All') {
        // .card -> .card-body -> .country-region
        region.parentElement.parentElement.style.display = 'block'
      } else {
        region.parentElement.parentElement.style.display = 'none'
      }
    })
  })
})
