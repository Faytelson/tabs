"use strict";

const tabs = document.querySelectorAll('.tab__item');
const pages = document.querySelectorAll('.tab__page');
const panel = document.querySelector('.tab__panel');

for(let i = 0; i < pages.length; i ++) {
    tabs[i].dataset.open = i;
}
panel.addEventListener('click', function(event) {
    if(event.target.classList.contains('tab__item')) {
        for(let i = 0; i < pages.length; i++) {
            pages[i].classList.remove('active');
            tabs[i].classList.remove('active');
        }
        pages[event.target.dataset.open].classList.add('active');
        event.target.classList.add('active');
    }
});
