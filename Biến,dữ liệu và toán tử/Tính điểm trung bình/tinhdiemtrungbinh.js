function tdtb(){
    let a = +document.getElementById("vatly").value;
    let b = +document.getElementById("hoahoc").value;
    let c = +document.getElementById("sinhhoc").value;
    let avg = (a+b+c)/3;
    let t = a+b+c;
    document.getElementById("kq").innerHTML = "Điểm TB là :" + avg + "Điểm tổng là :" + t;
}