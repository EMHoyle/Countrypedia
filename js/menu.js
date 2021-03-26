let button = document.getElementById('icon')
let link = document.getElementById('link')
let counter = 0

button.addEventListener('click', function (e) {
  e.preventDefault()
  if (counter == 0) {
    link.className = 'link two'
    counter = 1
  } else {
    link.classList.remove('two')
    link.className = 'link one'
    counter = 0
  }
})
