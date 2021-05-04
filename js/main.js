 //open/close mobile menu
 function prevMenu() {
        // mobile menu
        const mobileMenu = document.getElementById('mobile-menu');
        // button close
        const closeMenuMobile = document.getElementById('closeMobileMenu');
        // button open
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
 };

 
// mobile menu
const mobileMenu = document.getElementById('mobile-menu');
// button close
const closeMenuMobile = document.getElementById('closeMobileMenu');
// button open
    const openMenuMobile = document.getElementById('menu');

 if (document.documentElement.clientWidth > 425) {
    mobileMenu.style.display = 'none';
    openMenuMobile.style.display = 'none';
    closeMenuMobile.style.display = 'none';
 } else {
    mobileMenu.style.display = 'none';
    openMenuMobile.style.display = 'block';
    closeMenuMobile.style.display = 'none';
 }