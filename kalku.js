function appendValue(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){
    const display = document.getElementById("display");
    try {
        display.value = "Begoo lu";
    }catch (error) {
        display.value = "Hello World";
    }
}
function deleteLastCharacter() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}