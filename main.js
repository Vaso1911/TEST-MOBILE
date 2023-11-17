const form = document.querySelector('.form')
const btns = document.querySelectorAll('.btn')
const begin = document.querySelector('#begin')
const finish = document.querySelector('#finish')
const inputs = document.querySelectorAll('.form__input')
const modals = document.querySelectorAll('.modal')
const modalOne = document.querySelector('#modal-one')
const modalTwo = document.querySelector('#modal-two')

modalOne.style.transform = 'translate(-50%, -350%)'
modalTwo.style.transform = 'translate(-350%, -50%)'
console.log(inputs[0]);
begin.style.display = 'flex'
finish.style.display = 'none'


modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    const content = e.target.closest('.modal__container')
    if (!content) {
      modalOne.style.transform = 'translate(-50%, -350%)'
      modalTwo.style.transform = 'translate(-350%, -50%)'
    }
  })
})

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (begin.style.display == 'flex' && inputs[0].value != '') {
      begin.style.display = 'none'
      finish.style.display = 'flex'
    } else if (btn.dataset.btn == 'next-step' && inputs[1].value != '') {
      modalOne.style.transform = 'translate(-50%, -50%)'

    } else if (btn.dataset.modal == 'next-modal') {
      modalTwo.style.transform = 'translate(-50%, -50%)'
    }
    else {
      alert('введите адрес')
    }
  })
})

