const menuIcon = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');
const menuBtns = document.querySelectorAll('.menu__button');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
        console.log(menuBtns)
    });

    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', e => {
                
                if(menuIcon.classList.contains('_active')) {
                    menuIcon.classList.remove('_active');
                    menuBody.classList.remove('_active');
                    document.body.classList.remove('_lock');
                };

                
            });
        });
    };
    if (menuBtns.length > 0) {
        menuBtns.forEach(menuBtn => {
            menuBtn.addEventListener('click', () => {

                if(menuIcon.classList.contains('_active')) {
                    menuIcon.classList.remove('_active');
                    menuBody.classList.remove('_active');
                    document.body.classList.remove('_lock');
                };
            });
        });
    };
};