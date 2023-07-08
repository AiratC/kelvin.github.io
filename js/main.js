const nav = document.querySelector('#nav');
const btn = document.querySelector('#btn');
const btnImg = document.querySelector('#btn-img');

btn.onclick = () => {
    if (nav.classList.toggle('open')) {
        btnImg.src = './img/burger-close.svg';
    } else {
        btnImg.src = './img/burger-open.svg';
    }
}



AOS.init();


