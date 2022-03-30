// let value = +prompt("Nhập giá trị",0);
// if (value > "0"){
//     alert("1");
// }else if (value <"0"){
//     alert("-1");
// }else {
//     alert("0");
// }
let value = +prompt("Nhập giá trị","");
let check = 0;
if (value>0){
    check = 1;
}
if (value<0){
    check=-1;
}
switch (check){
    case 1:
        alert(1);
        break;
    case -1:
        alert(-1);
        break;
    default:
        alert(0);
        break;
}