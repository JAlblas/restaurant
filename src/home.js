import Logo from './cheese.jpg';

function component() {
    const element = document.createElement('div');
  
    const header = document.createElement('h1');
    header.textContent = "Kaas Imperium";
    element.appendChild(header);
 
    // Add the image to our existing div.
    const myLogo = new Image();
    myLogo.src = Logo;
 
    element.appendChild(myLogo);
 
    return element;
  }

  export default component;