import tabs from './modules/tabs';
import modal from './modules/modal';
import cards from './modules/cards';
import timer from './modules/timer';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
import dbjson from './modules/db';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
    timer();
    forms('form', modalTimerId);
    slider();
    calc();
    dbjson();
});    