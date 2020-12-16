console.log("THIS IS WORKING AGAINs!");

import './style.css';

import homeComponent from './home';

let homeButton = document.querySelector('#home-button');
homeButton.addEventListener("click", () => {
    let content = document.querySelector('#content');
    content.innerHTML = "";
    content.append(homeComponent());
})