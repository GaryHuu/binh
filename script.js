const burger = document.querySelector('.burger')
const right = document.querySelector('.right')
const userNameEle = document.getElementById('userName')

const queryParams = new URLSearchParams(window.location.search)
const name = queryParams.get('name')

console.log(name)

if (userNameEle) {
  if (name) {
    userNameEle.textContent = name
  }
}

if (burger) {
  burger.addEventListener('click', () => {
    if (right) {
      right.classList.toggle('active')
    }
  })
}
