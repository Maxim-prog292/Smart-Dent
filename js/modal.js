let openBtn = document.querySelectorAll('.open-modal');
let modal = document.getElementById('modal');
let back = document.getElementById('back');
let overflow = document.body;


for (let i = 0; i < openBtn.length; i++) {
    openBtn[i].addEventListener('click', open);
}


function open() {
    back.style.display = 'block';
    modal.style.display = 'flex';
    modal.classList.add('open');
    overflow.classList.add('overflow');  
}


const includes = document.getElementById('includes');
const form = document.getElementById('form');
const thanks = document.getElementById('thanks');
const signupBtn = document.getElementById('signup');














signupBtn.onclick = valid;


function valid() {
    const nameInRegistration = document.getElementById('formName').value;
    console.log(nameInRegistration);

    if (nameInRegistration == '' || nameInRegistration == ' ') {
        alert('ошибка');
    } else {
        alert('ошибки нет');
    }

    

}






function signup() {
    includes.style.display = 'none';
    form.style.display = 'none';
    thanks.style.display = 'flex';

    setTimeout(close, 2000);
}

function close() {
    back.style.display = 'none';
    modal.style.display = 'none';
    overflow.classList.remove('overflow');
    regain();
}

function regain() {
    includes.style.display = 'block';
    form.style.display = 'flex';
    thanks.style.display = 'none';
}


