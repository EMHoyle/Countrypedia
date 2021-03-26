const btnDark = document.querySelector('.btn-dark')

btnDark.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
  if (document.body.className === 'dark-mode') {
    btnDark.innerHTML = `
            <i class="fas fa-sun"></i>
            Light Mode
        `
  } else {
    btnDark.innerHTML = `
            <i class="fas fa-moon"></i>
            Dark Mode
        `
  }
})
