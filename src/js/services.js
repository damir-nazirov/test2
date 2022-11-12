import { toggleClass } from "./nav";

const servicesDescriptionTextHidden = document.querySelector('.services__description .hide');

const readMoreDescr = document.querySelector('.services__description-text .show-hide-button_show');
const hideMoreDescr = document.querySelector('.services__description-text .show-hide-button_hide');


const showHideMoreDescrText = () => {
    toggleClass(readMoreDescr, 'hide');
    toggleClass(hideMoreDescr, 'hide')
    toggleClass(servicesDescriptionTextHidden, 'hide')
  }


  readMoreDescr.addEventListener('click', showHideMoreDescrText)
  hideMoreDescr.addEventListener('click', showHideMoreDescrText)

///////////////////////////////////////////////////////////////////////

const hideBrends = document.querySelectorAll('.services__brands-logo-wrapper .hide')
const showMoreBrends = document.querySelector('.services__brands-logo .show-hide-button_show');
const hideMoreBrends = document.querySelector('.services__brands-logo .show-hide-button_hide');

const showHideMoreBrends = () => {
  hideBrends.forEach(element => toggleClass(element, 'hide'));
  toggleClass(showMoreBrends, 'hide');
  toggleClass(hideMoreBrends, 'hide');
}

showMoreBrends.addEventListener('click', showHideMoreBrends)
hideMoreBrends.addEventListener('click', showHideMoreBrends)