import Logo from './cheese.jpg';

function component() {
    const element = document.createElement('div');
  
    const header = document.createElement('h1');
    header.textContent = "About Kaas Imperium";
    element.appendChild(header);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere finibus felis, nec luctus sapien lacinia quis. Curabitur tincidunt urna leo, ut accumsan libero pretium in. In at metus maximus, porttitor erat quis, rutrum sem. Aliquam non accumsan libero. Vivamus quis augue at ex pretium vulputate. Praesent sagittis porttitor neque, a faucibus dolor. Cras est libero, luctus sed velit id, ultrices tristique ex. Integer tristique dui risus, sed porta ante posuere a. Nulla eu vehicula sapien, et facilisis augue. Vestibulum laoreet felis enim, at vehicula dolor mollis ut. Vestibulum efficitur dapibus finibus. Nulla facilisi." +
    "Integer non sollicitudin tortor, sit amet venenatis quam. Proin pharetra vel orci eget vehicula. Donec ullamcorper suscipit interdum. Vestibulum at tortor tellus. Cras fermentum felis et purus sagittis, quis tincidunt arcu tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris pellentesque, nisl vitae ullamcorper accumsan, ex ex mattis mauris, eu convallis libero arcu sed erat. Aliquam dolor dolor, feugiat quis dui in, tristique commodo lacus. Donec vulputate odio sed vulputate ullamcorper. Duis ut elit ultrices, interdum massa vel, maximus odio. Sed ut augue et neque aliquam pellentesque quis ac ligula. Ut posuere tortor vel ex dignissim, eu porta ante ultricies. Etiam vitae velit quis nibh tincidunt placerat maximus nec libero. Nunc et magna dolor." +
    "Proin nec nisl vel lacus ullamcorper condimentum sed et purus. Morbi pulvinar neque vel purus facilisis ornare. Suspendisse vitae convallis velit, vitae convallis arcu. In pellentesque nibh vel tellus maximus pellentesque. Ut sed nisi pellentesque, egestas elit a, congue purus. Integer eleifend aliquet massa vitae tempor. Aenean dapibus lacus vel lectus tristique lobortis. Integer sed placerat quam."
    element.appendChild(paragraph);
 
    return element;
  }

  export default component;