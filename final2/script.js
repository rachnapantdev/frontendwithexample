function findZodiac() {
    let date = document.getElementById("d").value;
    let month = document.getElementById("m").value;
    let zodiac = ""
    if ((date >= 21 && month == 3) || (date <= 19 && month == 4)) {
        zodiac = "Arise";
    }
    else if ((date >= 20 && month == 4) || (date <= 20 && month == 5)) {
        zodiac = "Taurus"
    }
    else {
        zodiac = "You are not from this Planet";
    }

    document.getElementById("res").innerHTML = zodiac

}

function findNumerology() {
    // 1-9
    // 24 => 2 + 4 =6

    let date = parseInt(document.getElementById("d").value);
    let sum = 0;
    while (date > 0) {
        let rem = date % 10;        
        sum = sum + rem;
        date = parseInt(date/10);

    }
    document.getElementById("res2").innerHTML = `Your Numerology Numbre is : ${sum}`;

}