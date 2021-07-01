let openBtn = document.querySelectorAll('.open-modal');
let modal = document.querySelector('#modal');
let back = document.querySelector('#back');
const closeButton = document.querySelector('.closeButton');

closeButton.addEventListener('click', close);

for (let i = 0; i < openBtn.length; i++) {
    openBtn[i].addEventListener('click', open);
}


function open() {
    back.style.display = 'block';
    modal.style.display = 'flex';
    modal.classList.add('open');
}

function close() {
    back.style.display = 'none';
    modal.style.display = 'none';
}


