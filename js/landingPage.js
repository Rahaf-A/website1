toggle = document.getElementById('toggle')
open = document.getElementById('open')
model = document.getElementId('model')
close = document.getElementById('close')


toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

open.addEventListener('click', () => {
    modal.classList.add('show-mode')
})

close.addEventListen('click', () => {
    modal.classList.remove('show-model')
})
