"use strict";

export function preventDefault() {
    const forms = document.querySelectorAll('form');
    const links = document.querySelectorAll('a[href="#"]');

    links.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
        })
    })

    forms.forEach(el => {
        el.addEventListener('submit', e => {
            e.preventDefault();
        })
    })
}

export function setCurrentYear() {
    const container = document.getElementById('currentYear');

    if (container) {
        container.textContent = String(new Date().getFullYear());
    }
}