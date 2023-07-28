const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const answerButton1 = document.getElementById("answer-button1")
const answerButton2 = document.getElementById("answer-button2")
const answerButton3 = document.getElementById("answer-button3")

answerButton1.onclick = function () {
    alert("ウツボ");
}

answerButton2.onclick = function () {
    alert("ハタタテハゼ");
}

answerButton3.onclick = function () {
    alert("イチモンスズメダイ");
}

button1.onclick = function () {
    if (input1.value == "ウツボ" || input1.value == "utubo" || input1.value == "うつぼ") {
        alert("正解！！");
    } else {
        alert("不正解……");
    }
}


button2.onclick = function () {
    if (input2.value == "ハタタテハゼ" || input2.value == "hatatatehaze" || input2.value == "はたたてはぜ") {
        alert("正解！！");
    } else {
        alert("不正解……");
    }
}

button3.onclick = function () {
    if (input3.value == "イチモンスズメダイ" || input3.value == "いちもんすずめだい" || input3.value == "itimonnsuzumedai" || input3.value == "イチモンスズメ" || input3.value == "itimonnsuzume" || input3.value == "いちもんすずめ") {
        alert("正解！！");
    } else {
        alert("不正解……");
    }
}