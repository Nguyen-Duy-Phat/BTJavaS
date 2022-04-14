
function touch(value){
    document.getElementById('input').value += value
}
function calculator() {
    let input = document.getElementById('input').value;
    let result = eval(input);
    document.getElementById('input').value = result;
}
function clearTex() {
    document.getElementById('input').value = '';
}