const text = document.querySelector('section .input-group .input-field')

const encrypt = document.querySelector('.btn-encrypt')
const decrypt = document.querySelector('.btn-decrypt')
const copy = document.querySelector('.btn-copy')

const messageDefault = document.querySelector('.right-content .box .box-content').innerHTML

const regex = /^[a-z ]+$/

const changeMessageToDefault = (value) => {
  if (value || value.length) return;

  document.querySelector('.right-content .box .box-content').innerHTML = messageDefault;

  document.querySelector('.right-content .box .button-group').style.display = 'none'
}

text.addEventListener('input', function() {
  let value = this.value

  changeMessageToDefault(value)
});

const encryptText = (value) => {
  value = value.replace('e', 'enter')
  value = value.replace('i', 'imes')
  value = value.replace('a', 'ai')
  value = value.replace('o', 'obter')
  value = value.replace('u', 'ufat')
  return value;
}

const decryptText = (value) => {
  value = value.replace(/enter/g, 'e')
  value = value.replace(/imes/g, 'i')
  value = value.replace(/ai/g, 'a')
  value = value.replace(/obter/g, 'o')
  value = value.replace(/ufat/g, 'u')
  return value;
}

const checkTextIsInvalid = (value) => {
  if (value && regex.test(value)) return;
  alert('O texto contem caracteres especiais ou letra maiúsculas.')
}

const  encryptAction = (value) => {
  if (!value || !regex.test(value)) return;

  value = encryptText(value)

  document.querySelector('.right-content .box .box-content').innerHTML = `<p class="message-text">${value}</p>`;

  document.querySelector('.right-content .box .button-group').style.display = 'block'
}

encrypt.addEventListener('click', function () {
  let value = document.querySelector('section .input-group .input-field').value.trim()
  checkTextIsInvalid(value)
  encryptAction(value)
})

const  decryptAction = (value) => {
  if (!value || !regex.test(value)) return;

  value = decryptText(value)

  document.querySelector('.right-content .box .box-content').innerHTML = `<p>${value}</p>`;

  document.querySelector('.right-content .box .button-group').style.display = 'block'
}

decrypt.addEventListener('click', function () {
  let value = document.querySelector('section .input-group .input-field').value.trim()
  checkTextIsInvalid(value)
  decryptAction(value)
})

copy.addEventListener('click', function () {
  const value = document.querySelector('.right-content .box .box-content')
  navigator.clipboard.writeText(value.textContent)
    .then(() => alert('Texto copiado com sucesso.'))
    .catch(() => alert('Erro ao copiar texto. Por favor, copie manualmente.'))
})