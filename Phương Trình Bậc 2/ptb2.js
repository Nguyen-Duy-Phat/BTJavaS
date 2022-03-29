function kq() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let x = -b / (2 * a);
    let x1, x2;
    let A = document.getElementById("kq");
    if (a == 0) {
        A.innerHTML = "a phải khác 0";
    } else if (a != 0) {
        let delta = (b*b) - 4*a*c;
        if (delta < 0) {
            A.innerHTML = "PT vô nghiệm";
        } else if (delta == 0) {
            A.innerHTML = "PT có nghiệm kép x1 = x2 = :" + x;
        } else{
            x1 = (-b + Math.sqrt(delta))/(2*a);
            x2 = (-b - Math.sqrt(delta))/(2*a);
            A.innerHTML = "PT có 2 nghiệm phân biệt x1 = " + x1 + " x2 = " + x2;
        }
    }
}