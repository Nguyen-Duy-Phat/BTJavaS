let cl = document.getElementById("kt");
cl.addEventListener("click",but);
function but(){
    let age = document.getElementById("a").value;
    if (age>=15){
        alert(age + " tuổi Bé nhà bạn đủ tuổi vào lớp 10");
    }else {
        alert("Quay về cấp 2 học đi cưng");
    }
}