const button = document.getElementById("button");
const input =document.getElementById("input");

button.onclick = () => {
    const tag = document.createElement("div");
    tag.setAttribute("class", "block")
    tag.innerText = input.value;
    document.body.append(tag);
    input.value =" ";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.onclick = () => {
        tag.remove()
    }
    tag.append(deleteButton);

}