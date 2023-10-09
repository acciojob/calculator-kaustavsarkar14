//your code here
const input = document.getElementById('input')

function clearInput(){
    input.value = ""
}

function addToInput(num){
    input.value+=num
}

function backspace(){
    input.value = input.value.slice(0, -1)
}

function ans(){
    input.value = eval(input.value)
}