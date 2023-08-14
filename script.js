const nameInput = document.getElementById('nameInput');
const content = document.getElementById('content');
const userName = document.getElementById('userName');

nameInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    const name = nameInput.value.trim();
    if (name !== '') {
      userName.textContent = name;
      content.style.display = 'block'; // Show the content
    } else {
      content.style.display = 'none'; // Hide the content
    }
  }
});
