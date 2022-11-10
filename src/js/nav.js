// const burger = document.querySelector('.button_burger');
// const closeNav = document.querySelector('.button_close');
// const mainNav = document.querySelector('.main-nav');
// const mainContent = document.querySelector('.main-content');
// // const header = document.querySelector('.header');

// export const addClass = (element, className) => {
//   element.classList.add(className)
// }

// export const removeClass = (element, className) => {
//   element.classList.remove(className)
// }


// const showNav = () => {
//       addClass(mainNav, 'display_flex');
//       addClass(mainContent, 'main-content_opasity_01')
//       // addClass(header, 'display_none')
//     }

// const hideNav = () => {
//   removeClass(mainNav, 'display_flex');
//   removeClass(mainContent, 'main-content_opasity_01');
// }


// burger.addEventListener('click', showNav);
// closeNav.addEventListener('click', hideNav);

const burger = document.querySelector('.button_burger');
const closeNav = document.querySelector('.button_close');
const mainNav = document.querySelector('.main-nav');
const mainContent = document.querySelector('.main-content');
// const header = document.querySelector('.header');

export const addClass = (element, className) => {
  element.classList.add(className)
}

export const removeClass = (element, className) => {
  element.classList.remove(className)
}


const showNav = () => {
      addClass(mainNav, 'display_flex');
      addClass(mainContent, 'main-content_opasity_01')
      // addClass(header, 'display_none')
    }

const hideNav = () => {
  removeClass(mainNav, 'display_flex');
  removeClass(mainContent, 'main-content_opasity_01');
}

// const toggleClass




burger.addEventListener('click', showNav);
closeNav.addEventListener('click', hideNav);