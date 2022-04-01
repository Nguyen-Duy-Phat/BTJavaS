let cl=document.getElementById("kq");
cl.addEventListener("click",button);
function button(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let x = a%b;
            if (x===0){
                document.getElementById("display").innerHTML = "a chia hết cho b";
             }else {
                document.getElementById("display").innerHTML = "a không chia hết cho b";
        }
}