import { addClass } from "./nav";
import { removeClass } from "./nav";

const services_description_text_hidden = document.querySelector('.services__description-text_hidden');
const read_more_descr = document.querySelector('.services__description-button_show');
const hide_more_descr = document.querySelector('.services__description-button_hide');
// const read_more_descr_button = document.querySelector('.services__description-button_show')

const showMoreDescrText = () => {
    addClass(services_description_text_hidden, 'display_flex');
    addClass(read_more_descr, 'display_none');
    addClass(hide_more_descr, 'display_flex');
  }

  const hideMoreDescrText = () => {
    removeClass(services_description_text_hidden, 'display_flex');
    removeClass(read_more_descr, 'display_none');
    removeClass(hide_more_descr, 'display_flex');
  }

read_more_descr.addEventListener('click', showMoreDescrText)
hide_more_descr.addEventListener('click', hideMoreDescrText)