const burger = document.querySelector('.burger')
const right = document.querySelector('.right')

if (burger) {
  burger.addEventListener('click', () => {
    if (right) {
      right.classList.toggle('active')
    }
  })
}
