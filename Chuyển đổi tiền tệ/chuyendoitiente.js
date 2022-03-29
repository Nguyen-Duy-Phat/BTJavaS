function convert(){
    let input = document.getElementById("input").value;
    let sl = document.getElementById("sl").value;
    let sl1 =document.getElementById("sl1").value;
    let result;
    result = input * sl1/sl;
    document.getElementById("Result").innerHTML = "Result :" + result;
}