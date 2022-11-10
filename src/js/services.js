import { addClass } from "./nav";
import { removeClass } from "./nav";

const servicesDescriptionTextHidden = document.querySelector('.services__description-text_hidden');

const readMoreDescr = document.querySelector('.services__description-text .show-hide-button_show');
const hideMoreDescr = document.querySelector('.services__description-text .show-hide-button_hide');



// console.log(hide_more_brends);
// const read_more_descr_button = document.querySelector('.services__description-button_show')

const showMoreDescrText = () => {
    addClass(servicesDescriptionTextHidden, 'display_flex');
    addClass(readMoreDescr, 'display_none');
    addClass(hideMoreDescr, 'display_flex');
  }

  const hideMoreDescrText = () => {
    removeClass(servicesDescriptionTextHidden, 'display_flex');
    removeClass(readMoreDescr, 'display_none');
    removeClass(hideMoreDescr, 'display_flex');
  }

  readMoreDescr.addEventListener('click', showMoreDescrText)
  hideMoreDescr.addEventListener('click', hideMoreDescrText)

///////////////////////////////////////////////////////////////////////


const servicesBrendsHidden = document.querySelector('.services__brands-logo-wrapper_hidden');

const showMoreBrends = document.querySelector('.services__brands-logo .show-hide-button_show');
const hideMoreBrends = document.querySelector('.services__brands-logo .show-hide-button_hide');

// console.log(show_more_brends);

const onShowMoreBrends = () => {
  addClass(servicesBrendsHidden, 'display_flex');
  addClass(showMoreBrends, 'display_none');
  addClass(hideMoreBrends, 'display_flex');
}

const onHideMoreBrends = () => {
  removeClass(servicesBrendsHidden, 'display_flex');
  removeClass(showMoreBrends, 'display_none');
  removeClass(hideMoreBrends, 'display_flex');
}

showMoreBrends.addEventListener('click', onShowMoreBrends)
hideMoreBrends.addEventListener('click', onHideMoreBrends)