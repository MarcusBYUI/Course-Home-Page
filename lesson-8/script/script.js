const date = document.querySelector(".date");
const dt = new Date();
let day = dt.getDate();
let month = dt.getMonth() + 1;
let year = dt.getFullYear();
day = (day <= 9) ? '0' + day : day;
month = (month <= 9) ? '0' + month : month;
date.innerHTML = `Compiled ${day}.${month}.${year} by Marcus`;