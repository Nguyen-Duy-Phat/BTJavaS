function bmi() {
    let a = document.getElementById("cn").value;
    a = parseFloat(a);
    let b = document.getElementById("cc").value;
    b = parseFloat(b);
    let x = b/(a*2);
    console.log(x);
    if (x < 18) {
        document.getElementById("da").innerHTML = x + "Người bằng chân,chân bằng tay,tay bằng ....tăm";
    } else if (x < 25) {
        document.getElementById("da").innerHTML = x + "Bình thường";
    } else if (x < 30) {
        document.getElementById("da").innerHTML = x + "Hơi thừa cân";
    } else {
        document.getElementById("da").innerHTML = x + "Béo Phì";
    }
}