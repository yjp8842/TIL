const changeName = document.getElementById('username');
const changeIntro = document.getElementById('introduction');
const inputForm = document.getElementById('input-form')

function saveName(text) {
  localStorage.setItem('name', text);
}

function saveIntro(text) {
  localStorage.setItem('intro', text);
}

function handleSubmit(e) {
  e.preventDefault();
  const currentNValue = changeName.value;
  const currentIValue = changeIntro.value;
  saveName(currentNValue)
  saveIntro(currentIValue)
}

inputForm.addEventListener('submit', handleSubmit)