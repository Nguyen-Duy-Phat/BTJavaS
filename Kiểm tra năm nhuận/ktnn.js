let year = parseInt(prompt("Enter a year"));
let namnhuan = false;

let chc4 = year % 4 == 0;
if (chc4) {
    let chc100 = year % 100 == 0;
    if (chc100) {
        let chc400 = year % 400 == 0;
        if (chc400) {
            namnhuan = true;
        }
    } else {
        namnhuan = true;
    }
}

if (namnhuan) {
    alert(year + " Đây là năm nhuận");
} else {
    alert(year + " Đây không là năm nhuận");
}