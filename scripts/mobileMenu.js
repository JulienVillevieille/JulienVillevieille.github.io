let isMenuMobileEnabled = false;

/**
 * Crée l'evenement au click sur le bouton du menu hamburger 
 * pour déclencher les évènement de mise a jour des affichages
 */
function initAddEventListenerHamburgerMenu() {
    const hamburgerMenuIcon = document.querySelector(".header__content__nav__hamburger");
    
    hamburgerMenuIcon.addEventListener("click", () => {
        isMenuMobileEnabled = !isMenuMobileEnabled;
        
        updateMobileMenuDipslay();
        updateHamburgerMenuIconDisplay();
    });
}

/**
 * Met à jour l'affichage du menu mobile (l'active ou le désactive)
 */
function updateMobileMenuDipslay() {
    const mobileMenu = document.querySelector(".header__mob-menu");
    if(isMenuMobileEnabled) {
        mobileMenu.style.display = "block";
    } else {
        mobileMenu.style.display ="none";
    }
}

/**
 * Met à jour l'affichage de l'icone du menu hamburger (hamburger pour ouvrir ou croix pour le fermer)
 */
function updateHamburgerMenuIconDisplay() {
    const iconHamburgerMenu = document.querySelector(".header__content__nav__hamburger__img--ham");
    const iconCloseHamburgerMenu = document.querySelector(".header__content__nav__hamburger__img--close");
    if(!isMenuMobileEnabled){
        iconHamburgerMenu.style.display = "block"
        iconCloseHamburgerMenu.style.display = "none";
    } else {
        iconHamburgerMenu.style.display = "none"
        iconCloseHamburgerMenu.style.display = "block";
    }
}

/**
 * Crée l'évènement au click sur les boutons du menu mobile afin que le menu mobile
 * se retire quand on l'a utilisé
 */
function initAddEventListenerMobileMenuElement() {
    const mobileMenuElements = document.querySelectorAll(".header__mob-menu__nav__list__element");
    for (let i = 0; i<mobileMenuElements.length; i++) {
        mobileMenuElements[i].addEventListener("click", () => {
            isMenuMobileEnabled = false;
            updateHamburgerMenuIconDisplay();
            updateMobileMenuDipslay();
        });
    }
}