// DOM utility functions
export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

export const createElement = (tag, className = '', attributes = {}) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
    return element;
};

export const addEventListenerToAll = (elements, event, handler) => {
    elements.forEach(element => element.addEventListener(event, handler));
};