"use strict";

const panel = document.querySelector('.tab__panel'),
    tabs = document.querySelectorAll('.tab__item'),
    pages = document.querySelectorAll('.tab__page');

for(let i = 0; i < pages.length; i++) {
    tabs[i].dataset.open = i;
}
panel.addEventListener('click', function(event){
    let target = event.target;
    if(target.classList.contains('tab__item')) {
        for(let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active', 'fade');
            pages[i].classList.remove('active', 'fade');
        }
        target.classList.add('active');
        pages[target.dataset.open].classList.add('active', 'show', 'rename');
    }
})
