
 function prevMenu() {

        const mobileMenu = document.getElementById('mobile-menu');

        const closeMenuMobile = document.getElementById('closeMobileMenu');

        const openMenuMobile = document.getElementById('menu');

        if (mobileMenu.style.display == 'none') {
            mobileMenu.style.display = 'flex';

            openMenuMobile.style.display = 'none';
            closeMenuMobile.style.display = 'block';
        }
        else {
            mobileMenu.style.display = 'none';

            openMenuMobile.style.display = 'block';
            closeMenuMobile.style.display = 'none';
        }
 }

let offset = 0;

const sliderLineThree = document.querySelector('.slider-line-thee');
const prevThree = document.querySelector('.prev-thee');
const nextThree = document.querySelector('.next-thee');

nextThree.addEventListener('click', nextSlideThree);
prevThree.addEventListener('click', prevSlideThree);

function nextSlideThree() {
    offset += 1220;
    if (offset > 3660) {
        offset = 0;
    }
    sliderLineThree.style.left = -offset + 'px';
}
function prevSlideThree() {
    offset -= 1220;
    if (offset < 0) {
        offset = 3660;
    }
    sliderLineThree.style.left = -offset + 'px';
}

let offsetOne = 0;

const sliderLineOne = document.querySelectorAll('.slider-line');
const prevOne = document.querySelectorAll('.prev');
const nextOne = document.querySelectorAll('.next');




nextOne.forEach(pressToNext);
prevOne.forEach(pressToPrev);

function pressToNext(item) {
    item.addEventListener('click', nextSlide);
}
function pressToPrev(item) {
    item.addEventListener('click', prevSlide);
}
function nextSlide(){
    offset += 789; 
    if (offset > 2370) {
        offset = 0;
    }
    sliderLineOne.forEach(function(item) {
        item.style.left = -offset + 'px';
    })     
}
function prevSlide(){
    offset -= 789; 
    if (offset < 0) {
        offset = 2370;
    }
    sliderLineOne.forEach(function(item) {
        item.style.left = -offset + 'px';
    })     
}


const image = document.querySelectorAll('.photogallery-img');
const closeBtn = document.querySelector('.closeBtn');
const photogallery = document.querySelector('.photogallery-container');

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function() {

        const img = document.createElement('img');
        img.src = `/images/img${i+1}.jpg`;
        img.classList.add('img-open')
        photogallery.appendChild(img);

        // image[i].classList.add('img-open');
        back.style.display = 'block';
        overflow.classList.add('overflow');
        closeBtn.style.display = 'block'; 
        
    } );
    closeBtn.addEventListener('click', function() {
        // img.classList.remove('img-open');
        photogallery.removeChild(photogallery.children[9]);
        back.style.display = 'none';
        overflow.classList.remove('overflow');
        closeBtn.style.display = 'none'; 
    })
}





    // for (let k = 0; k < sliderLine.length; k++) {

    //     for (let j = 0; j < prev.length; j++) {

    //         prev[j].addEventListener('click', prevSlide);

    //         function prevSlide() {
    //             offset -= 1220;
    //             if (offset < 0) {
    //                 offset = 4880;
    //             }
    //             sliderLine[k].style.left = -offset + 'px';
    //         };
    //     }
    //     for (let t = 0; t < next.length; t++) {
    //         next[t].addEventListener('click', nextSlide);
    //         function nextSlide() {
    //             offset += 1220;
    //             if (offset > 4880) {
    //                 offset = 0;
    //             }
    //             sliderLine[t].style.left = -offset + 'px';
    //         };
    //     };
    // };






