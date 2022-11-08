const burger = document.querySelector('.button_burger');
const closeNav = document.querySelector('.button_close');
const main_nav = document.querySelector('.main-nav');
const main_content = document.querySelector('.main-content');
// const header = document.querySelector('.header');

export const addClass = (element, className) => {
  element.classList.add(className)
}

export const removeClass = (element, className) => {
  element.classList.remove(className)
}

const showNav = () => {
      addClass(main_nav, 'display_flex');
      addClass(main_content, 'main-content_opasity_01')
      // addClass(header, 'display_none')
    }

const hideNav = () => {
  removeClass(main_nav, 'display_flex');
  removeClass(main_content, 'main-content_opasity_01');
}


burger.addEventListener('click', showNav);
closeNav.addEventListener('click', hideNav);