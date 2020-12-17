import Logo from './cheese.jpg';

function component() {
    const element = document.createElement('div');
  
    const header = document.createElement('h1');
    header.textContent = "Kaas Imperium Menu";
    element.appendChild(header);
 
    return element;
  }

  export default component;