function pcong(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = a+b;
    document.getElementById("kqpt").innerHTML = "   = " + c;
}
function ptru(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = a-b;
    document.getElementById("kqpt").innerHTML = "   = " + c;
}
function pnhan(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = a*b;
    document.getElementById("kqpt").innerHTML = "   = " + c;
}
function pchia(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = a/b;
    document.getElementById("kqpt").innerHTML = "   = " + c;
}