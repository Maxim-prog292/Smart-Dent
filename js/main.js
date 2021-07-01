
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

// gallery
const image = document.querySelectorAll('.photogallery-img');
const closeBtn = document.querySelector('.closeBtn');
const photogallery = document.querySelector('.photogallery-container');

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function() {

        const img = document.createElement('img');
        img.src = `images/img${i+1}.jpg`;
        img.classList.add('img-open');
        
        photogallery.appendChild(img);

        
        back.style.display = 'block';
        closeBtn.style.display = 'block'; 
    
        closeBtn.addEventListener('click', function() {
            const openImg = document.querySelectorAll('.img-open');
            
            for ( let i = 0; i < openImg.length; i++) {
                openImg[i].remove();
                back.style.display = 'none';
                closeBtn.style.display = 'none'; 
            }
        })
    });
}
// sertificate
const sertificat = document.querySelectorAll('.serteficat-img');
const closeBtn2 = document.querySelector('.closeBtn2');
const certificates = document.querySelector('.certificates_container');

for (let i = 0; i < sertificat.length; i++) {

    sertificat[i].addEventListener('click', function() {

        const sertificatCreated = document.createElement('img');
        sertificatCreated.src = `images/serteficat${i+1}.jpg`;
        sertificatCreated.classList.add('img-open');
        
        certificates.appendChild(sertificatCreated);

        back.style.display = 'block';
        closeBtn2.style.display = 'block'; 
        
    
        closeBtn2.addEventListener('click', function() {
            const sertificatForClose = document.querySelectorAll('.img-open');

            for (let i = 0; i < sertificatForClose.length; i++) {
                sertificatForClose[i].remove();
                back.style.display = 'none';
                closeBtn2.style.display = 'none'; 
            }  
        });
    });
};






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