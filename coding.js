let inputInsert = document.getElementById('inputInsert');
let inputField = document.getElementById('inputField');
let todoCont = document.getElementById('todoCont');

inputInsert.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    todoCont.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
             paragraph.style.textDecoration='line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        todoCont.removeChild(paragraph);
    })
})