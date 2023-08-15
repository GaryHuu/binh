const nameInput = document.getElementById('nameInput')
const content = document.getElementById('content')
const userName = document.getElementById('userName')
const burger = document.querySelector('.burger')
const right = document.querySelector('.right')

nameInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    if (burger && right) {
      right.classList.remove('active')
    }

    const name = nameInput.value.trim()
    if (name !== '') {
      userName.textContent = name
      content.style.display = 'block' // Show the content
    } else {
      content.style.display = 'none' // Hide the content
    }
  }
})

if (burger) {
  burger.addEventListener('click', () => {
    if (right) {
      right.classList.toggle('active')
    }
  })
}
