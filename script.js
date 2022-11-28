var displayDiv = document.querySelector("#display");
var count = "";
var total = 0;

function press(num){
    count += num;
    displayDiv.innerText = count;
    return count;
}

function setOP(op){
    count += op;
    return count;
}

function calculate(){
    count = eval(count);
    displayDiv.innerText = count;
    return count;
}

function clr(){
    displayDiv.innerText = 0;
    count = "";
    return count;
}