const list = [
    // {
    //     id:1,
    //     text: "learn js"
    // }
];

const addButton = document.querySelector('#button');
const input = document.querySelector('#input');

function Change(id) {
    const item = list.findIndex(t => t.id === id);
    const text =prompt("Текст для изменения?");
    list[item].text = text;
    item.textContent=text;
    render();
}

function Delete(id) {
    const item = list.findIndex(t => t.id === id);
    list.splice(item,1);
    render();
}


function render() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class','list');

    for(let i = 0; i < list.length; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'todoBlock');
        const h3 = document.createElement('h3');
        h3.innerHTML = list[i].text;

        div.append(h3);


        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');

        const changeButton = document.createElement('button');
        changeButton.setAttribute('class', 'change');
        changeButton.innerText="Change";

        changeButton.onclick = () => {
            Change(list[i].id)
        }

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerText="Delete";

        deleteButton.onclick = () => {
            Delete(list[i].id)
        }

       
    

      

        
        buttons.append(changeButton, deleteButton);

        div.append(buttons);

        mainDiv.append(div);
        input.value =" ";
       
    }
    
    
    const form = document.querySelector('.form');
    document.querySelector('.list').remove();

    form.append(mainDiv);
    input.value='';

}

function handleClick(event){
    event.preventDefault();

    const obj = {
        id: list.length + 1,
        text: input.value
    };

    list.push(obj);
    console.log(list);
    render();
}

addButton.addEventListener('click', handleClick);