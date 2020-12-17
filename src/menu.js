import Logo from './cheese.jpg';

function component() {
    const element = document.createElement('div');
  
    const header = document.createElement('h1');
    header.textContent = "Kaas Imperium Menu";
    element.appendChild(header);

    const table = tableCreate();
    element.appendChild(table);
 
    return element;
  }

  function tableCreate() {
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 3; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 2; j++) {
          var td = document.createElement('td');
          td.textContent = "Burger";
          tr.appendChild(td)
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    return tbl;
  }

  export default component;