const list = document.querySelector("#favList");
const input = document.querySelector("#fav");
const button = document.querySelector("#submitFav");

button.onclick = function() {
    let myItem = input.value;
    if (myItem == "") {

        return;
    } else {
        input.value = "";

        const listItem = document.createElement("li");
        const listText = document.createElement("p");
        const listBtn = document.createElement("span");

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = "❌";
        list.appendChild(listItem);

        listBtn.onclick = function(e) {
            list.removeChild(listItem);
        };

        input.focus();

    }

};