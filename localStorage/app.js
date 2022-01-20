const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const clearAllBtn = document.querySelector("button");
const ITEMS_KEY = "items";

let itemsArray = []; // newItemObj

function saveItems(){
    localStorage.setItem(ITEMS_KEY, JSON.stringify(itemsArray));
}

const savedItems = localStorage.getItem(ITEMS_KEY); // string
const parsedItems = JSON.parse(savedItems);

if(savedItems){
    itemsArray = parsedItems;
    parsedItems.forEach(paintItems);
}

function clickClearAllBtn(){
    ul.innerText = "";
    localStorage.removeItem(ITEMS_KEY);
}

function clickDeleteBtn(e){
    const li = e.target.parentElement;
    li.remove();
    itemsArray = itemsArray.filter((item) => item.id !== parseInt(li.id));
    saveItems();
}

function paintItems(newItemObj){
    const li = document.createElement("li");
    li.id = newItemObj.id;
    const item = document.createElement("span");
    item.innerText = newItemObj.text;
    const delBtn = document.createElement("button");
    delBtn.classList = "delBtn";
    delBtn.innerText = "X";
    delBtn.addEventListener("click", clickDeleteBtn);

    li.appendChild(item);
    li.appendChild(delBtn);

    ul.appendChild(li);
}

function handleItemSubmit(e){
    e.preventDefault();
    const newItem = input.value;
    input.value = "";
    const newItemObj = {
        text: newItem,
        id: Date.now(),
        // 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리초
        // 랜덤한 숫자를 출력
    }
    itemsArray.push(newItemObj);
    clearAllBtn.classList.remove('hide');

    paintItems(newItemObj);
    saveItems();
}

form.addEventListener("submit", handleItemSubmit);
clearAllBtn.addEventListener("click", clickClearAllBtn);
