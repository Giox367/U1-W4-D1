let data = new Date();

document.getElementById("today-date").innerHTML = data;

let anno = data.getFullYear();

document.getElementById("year").innerHTML = anno + "  " + "/";

let month = data.getMonth();

document.getElementById("month").innerHTML = month;

let day = data.getDate();

document.getElementById("day").innerHTML = "/" + day;

let time = data.getHours() + ":" + data.getMinutes();

document.getElementById("localtime").innerHTML = time;
