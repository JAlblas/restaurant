import './style.css';

import homeComponent from './home';
import menuComponent from './menu';
import aboutComponent from './about';
import staffComponent from './staff';

let homeButton = document.querySelector('#home-button');
homeButton.addEventListener("click", () => {
    let content = document.querySelector('#content');
    content.innerHTML = "";
    content.append(homeComponent());
})

let menuButton = document.querySelector('#menu-button');
menuButton.addEventListener("click", () => {
    let content = document.querySelector('#content');
    content.innerHTML = "";
    content.append(menuComponent());
})

let aboutButton = document.querySelector('#about-button');
aboutButton.addEventListener("click", () => {
    let content = document.querySelector('#content');
    content.innerHTML = "";
    content.append(aboutComponent());
})

let staffButton = document.querySelector('#staff-button');
staffButton.addEventListener("click", () => {
    let content = document.querySelector('#content');
    content.innerHTML = "";
    content.append(staffComponent());
})

let content = document.querySelector('#content');
content.innerHTML = "";
content.append(homeComponent());