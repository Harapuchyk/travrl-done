console.log('1. Выполнен. +50: \n- только не бесконечный слайдер. \n2. Выполнен. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50:\n- логин попап соответствует верстке его закрытие происходит при клике вне попапа +25\n- логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25\n3. Выполнен: Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25 \nИтог: не знаю, может 80-90 баллов\n-Сделал как смог, не совсем правильно, но за-то сам =)');

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.navigation');
    const menuExitItem = document.querySelector('.exit-burger-menu');
    let menuExitClick = [];       
    burgerItem.addEventListener('click', () => {
        menu.classList.add('navigation-active');
    });
    menuExitItem.addEventListener('click', () => {
        menu.classList.remove('navigation-active');
    });
    for (let i = 0 ; i <=5 ; i++) {
        menuExitClick[i] = document.querySelector('.click-exit' + i);
    menuExitClick[i].addEventListener('click', () => {
        menu.classList.remove('navigation-active');
    });
    };
}());

(function () {
    const buttonLogin = document.querySelector('.header-button');
    const popUp = document.querySelector('.pop-up');

    buttonLogin.addEventListener('click', () => {
        popUp.classList.toggle('hidden');        
    });
}());


const popUp = document.querySelector('.pop-up');
popUp.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up')) {
        popUp.classList.toggle('hidden');
    }
});

const navigationListItemLinkAccount = document.querySelector('.navigation-list-item-link-account')
navigationListItemLinkAccount.addEventListener('click', () => {
    popUp.classList.toggle('hidden');
});

const registerLink = document.getElementById('id-bottom-link-registration-pop-up');
const contentPopUp = document.querySelector('.content-pop-up');
const textPopUP = document.querySelector('.text-pop-up');
const buttonFB = document.querySelector('.button-facebook-pop-up');
const buttonG = document.querySelector('.button-google-pop-up');
const buttonSignIn = document.querySelector('.button-sign-in-pop-up');
const boxLinePopUp = document.querySelector('.box-line-pop-up');
const linkForgotPasswordPopUp = document.querySelector('.link-forgot-password-pop-up')
const bottomTextRegistrationPopUp = document.querySelector('.bottom-text-registration-pop-up')

registerLink.addEventListener('click', () => { 
    if (contentPopUp.classList.contains('content-pop-up')) {   
            contentPopUp.classList.remove('content-pop-up');
            contentPopUp.classList.add('registration-version-pop-up');
            textPopUP.textContent = 'Create account';
            buttonSignIn.textContent = 'Sign Up';
            buttonFB.style.display = 'none';
            buttonG.style.display = 'none';
            boxLinePopUp.style.display = 'none';
            linkForgotPasswordPopUp.style.display = 'none';
            bottomTextRegistrationPopUp.textContent = 'Already have an account?';
            registerLink.textContent = 'Log in';                 
    }
    else { contentPopUp.classList.contains('registration-version-pop-up');  
            contentPopUp.classList.remove('registration-version-pop-up');
            contentPopUp.classList.add('content-pop-up');          
            textPopUP.textContent = 'Log in to your account';
            buttonSignIn.textContent = 'Sign In';
            buttonFB.style.display = 'flex';
            buttonG.style.display = 'flex';
            boxLinePopUp.style.display = 'flex';
            linkForgotPasswordPopUp.style.display = 'block';        
            bottomTextRegistrationPopUp.textContent = 'Don’t have an account?';
            registerLink.textContent = 'Register'; 
    }

});

const inputPopUpEMail = document.querySelector('.input-pop-up-e-mail');
const inputPopUpPassword = document.querySelector('.input-pop-up-password');

buttonSignIn.addEventListener('click' , () => {
    const userEMail = inputPopUpEMail.value;
    const userPassword = inputPopUpPassword.value;    
    inputPopUpEMail.value = '';
    inputPopUpPassword.value = '';
    alert(`e-mail: ${userEMail}\n passwopd: ${userPassword}`);
});

const carouselBlok = document.querySelector('.destinations-img');
const buttonLeft = document.querySelector('.left-carousel-button');
const buttonRight = document.querySelector('.right-carousel-button');
const slideControlDot1 = document.querySelector('.slide-control-dot1');
const slideControlDot2 = document.querySelector('.slide-control-dot2');
const slideControlDot3 = document.querySelector('.slide-control-dot3');

let leftPosition = window.getComputedStyle(carouselBlok).left;
buttonLeft.addEventListener('click', () => {     
    if (leftPosition === '-560px' && carouselBlok.style.left !== '-1400px') {
        carouselBlok.style.left = '320px';
        slideControlDot2.classList.remove('slide-control-dot-main');
        slideControlDot3.classList.remove('slide-control-dot-main');
        slideControlDot1.classList.add('slide-control-dot-main');
        buttonLeft.classList.remove('left-carousel-button-background-active');  
        buttonLeft.classList.add('left-carousel-button-background-no-active');   
    }
   
    if (leftPosition === '-560px' && carouselBlok.style.left === '-1400px') {
        carouselBlok.style.left = '-560px';
        slideControlDot3.classList.remove('slide-control-dot-main');
        slideControlDot1.classList.remove('slide-control-dot-main');
        slideControlDot2.classList.add('slide-control-dot-main');
        buttonLeft.classList.remove('left-carousel-button-background-no-active');  
        buttonLeft.classList.add('left-carousel-button-background-active'); 
        buttonRight.classList.remove('right-carousel-button-background-no-active');  
        buttonRight.classList.add('right-carousel-button-background-active'); 
    }  
});

buttonRight.addEventListener('click', () => {
    if (leftPosition === '-560px' && carouselBlok.style.left !== '320px') {
        carouselBlok.style.left = '-1400px';        
        slideControlDot2.classList.remove('slide-control-dot-main');
        slideControlDot1.classList.remove('slide-control-dot-main');
        slideControlDot3.classList.add('slide-control-dot-main');
        buttonRight.classList.remove('right-carousel-button-background-active');  
        buttonRight.classList.add('right-carousel-button-background-no-active'); 
        buttonLeft.classList.remove('left-carousel-button-background-no-active');  
        buttonLeft.classList.add('left-carousel-button-background-active');
    }
    if (leftPosition === '-560px' && carouselBlok.style.left === '320px') {
    carouselBlok.style.left = '-560px';
    slideControlDot1.classList.remove('slide-control-dot-main');
    slideControlDot3.classList.remove('slide-control-dot-main');
    slideControlDot2.classList.add('slide-control-dot-main');
    buttonRight.classList.remove('right-carousel-button-background-no-active');      
    buttonRight.classList.add('right-carousel-button-background-active'); 
    buttonLeft.classList.remove('left-carousel-button-background-no-active');  
    buttonLeft.classList.add('left-carousel-button-background-active');
    }
});


slideControlDot1.addEventListener('click', () => {    
    if (slideControlDot3.classList.contains('slide-control-dot-main')) {
        carouselBlok.style.left = '320px';
    }
    if (leftPosition === '-560px' && carouselBlok.style.left !== '-1400px') {
        carouselBlok.style.left = '320px';      
    }   
    if (leftPosition === '-560px' && carouselBlok.style.left === '-1400px') {
        carouselBlok.style.left = '-560px';
    }
    slideControlDot2.classList.remove('slide-control-dot-main');
    slideControlDot3.classList.remove('slide-control-dot-main');
    slideControlDot1.classList.add('slide-control-dot-main');
    buttonLeft.classList.remove('left-carousel-button-background-active');  
    buttonLeft.classList.add('left-carousel-button-background-no-active'); 
    buttonRight.classList.remove('right-carousel-button-background-no-active');  
    buttonRight.classList.add('right-carousel-button-background-active'); 
});

slideControlDot2.addEventListener('click', () => {    
    carouselBlok.style.left = '-560px';
    slideControlDot1.classList.remove('slide-control-dot-main');
    slideControlDot3.classList.remove('slide-control-dot-main');
    slideControlDot2.classList.add('slide-control-dot-main');
    buttonLeft.classList.remove('left-carousel-button-background-no-active');  
    buttonLeft.classList.add('left-carousel-button-background-active'); 
    buttonRight.classList.remove('right-carousel-button-background-no-active');  
    buttonRight.classList.add('right-carousel-button-background-active');     
});

slideControlDot3.addEventListener('click', () => {    
    if (slideControlDot1.classList.contains('slide-control-dot-main')) {
        carouselBlok.style.left = '-1400px';
    }
    if (leftPosition === '-560px' && carouselBlok.style.left !== '320px') {
        carouselBlok.style.left = '-1400px';       
    }
    if (leftPosition === '-560px' && carouselBlok.style.left === '320px') {
    carouselBlok.style.left = '-560px';
    }
    slideControlDot2.classList.remove('slide-control-dot-main');
    slideControlDot1.classList.remove('slide-control-dot-main');
    slideControlDot3.classList.add('slide-control-dot-main');
    buttonLeft.classList.remove('left-carousel-button-background-no-active');  
    buttonLeft.classList.add('left-carousel-button-background-active'); 
    buttonRight.classList.remove('right-carousel-button-background-active');  
    buttonRight.classList.add('right-carousel-button-background-no-active'); 
});