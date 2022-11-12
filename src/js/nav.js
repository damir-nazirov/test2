const burger = document.querySelector('.button_burger');
const closeNav = document.querySelector('.button_close');
const mainNav = document.querySelector('.main-nav');
const mainContent = document.querySelector('.main-content');


export const toggleClass = (element, className ) => {
        if (element.classList.contains(className)) {
          element.classList.remove(className)
        }
        else {element.classList.add(className)}
}


const toggleShowNav = () => {
  toggleClass(mainNav, 'hide')
  toggleClass(mainContent, 'main-content_opasity_01')
}

burger.addEventListener('click', toggleShowNav);
closeNav.addEventListener('click', toggleShowNav);
