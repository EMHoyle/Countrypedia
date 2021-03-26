const form = document.querySelector('#form')
const inputText = document.querySelector('#inputText')

const formData = (data) => {
  form.addEventListener('keyup', async (e) => {
    e.preventDefault()

    const clientText = inputText.value.toLowerCase()

    const formFilter = data.filter((item) => {
      const apiText = item.name.toLowerCase()
      if (apiText.indexOf(clientText) !== -1) {
        return item
      }
    })
    country(formFilter)
  })
}
