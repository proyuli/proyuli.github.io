
var leftTime = 14400;

function CountTime() {
    //var date = new Date();
    //var now = date.getTime();
    //var endTime = now + 14400000;
    leftTime--;
    var d = Math.floor(leftTime / 60 / 60 / 24);
    var h = Math.floor(leftTime / 60 / 60 % 24);
    var m = Math.floor(leftTime / 60 % 60);
    var s = Math.floor(leftTime % 60);
    document.getElementById("day").innerHTML = " " + d + "天 ";
    document.getElementById("hour").innerHTML = "0" + h + ":";
    if (m > 9) {
        document.getElementById("min").innerHTML = m + ":";
    } else {
        document.getElementById("min").innerHTML = "0" + m + ":";
    }
    if (s > 9) {
        document.getElementById("sec").innerHTML = s;
    } else {
        document.getElementById("sec").innerHTML = "0" + s;
    }
    setTimeout(CountTime, 1000);
}

function init(){
    var name = window.prompt("请输入你的名字","张三");
    var studentNumber = window.prompt("请输入你的学号","");
    document.getElementsByClassName("info").getElementById("person").innerHTML = name + " " + studentNumber;
}


