let UserName = prompt("User","");
if (UserName == "admin"){
    //Nhập pass nếu đúng Admin
}else if (UserName == null){
    alert("Canceled");
}else {
    alert("I don't know you");
}
let Pd = prompt("Password","");
    if (Pd == "themaster"){
        alert("Welcom Master");
    }else if (Pd == null){
        alert("Canceled");
    }else {
        alert("Wrong password");
    }