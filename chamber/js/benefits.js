const benefitcontainer = document.querySelector(".benefit");


function setDisplay(one, two, three, price) {

    benefitcontainer.style.display = "block";

    document.querySelector("#one").textContent = one;
    document.querySelector("#two").textContent = two;
    document.querySelector("#three").textContent = three;
    document.querySelector("#price").textContent = price;
}

function free() {

    let price = "Free";
    let one = "Free water supply";

    setDisplay(one, "", "", price);

}


function bronze() {
    let one = "Free pool service";
    let two = "Free towing service";
    let three = "Special invite to events";
    let price = "$200/month";


    setDisplay(one, two, three, price);


}

function silver() {
    let one = "All of bronze benefits";
    let two = "Free banner Ads";
    let three = "Free golf course entry";
    let price = "$300/month";

    setDisplay(one, two, three, price);



}

function gold() {
    let one = "All of Silver benefits";
    let two = "Free 6months gym entry";
    let three = "Free stadium entry";
    let price = "$500/month";

    setDisplay(one, two, three, price);

}



document.querySelector("#free").addEventListener("click", free);
document.querySelector("#bronze").addEventListener("click", bronze);
document.querySelector("#silver").addEventListener("click", silver);
document.querySelector("#gold").addEventListener("click", gold);

// submission time

const dt = new Date();
let day = dt.getDate();
let month = dt.getMonth() + 1;
let years = dt.getFullYear();
let hour = dt.getHours();
let minutes = dt.getMinutes();
let sec = dt.getSeconds();
day = (day <= 9) ? '0' + day : day;
month = (month <= 9) ? '0' + month : month;

document.querySelector("#time").value = `${day}.${month}.${years}..${hour}.${minutes}.${sec}`;