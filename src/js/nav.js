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

console.log(mainNav);
// const header = document.querySelector('.header');

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


export const toggleClass = (element, className ) => {
        if (element.classList.contains(className)) {
          element.classList.remove(className)
        }
        else {element.classList.add(className)}
}

const toggleShowNav = () => {
  toggleClass(mainNav, 'hide')
  toggleClass(mainContent, 'main-content_opasity_01')
  // addClass(header, 'display_none')
}

// const hideNav = () => {
// removeClass(mainNav, 'display_flex');
// removeClass(mainContent, 'main-content_opasity_01');
// }




burger.addEventListener('click', toggleShowNav);
closeNav.addEventListener('click', toggleShowNav);



// burger.addEventListener('click', showNav);
// closeNav.addEventListener('click', hideNav);