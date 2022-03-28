function doS() {
    let input = document.getElementById('input').value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    // alert(document.getElementById('1'))
    let result = input * select2/select1
    document.getElementById('result').innerText = 'Result' + result;
}