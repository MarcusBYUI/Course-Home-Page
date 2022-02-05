function toggleMenu() {
    document.querySelector(".primary").classList.toggle("open");
    document.querySelector("#ham").classList.toggle("open");
}

const x = document.querySelector("#ham");
x.onclick = toggleMenu;



const fBase = document.querySelector(".fb");
const fMed = document.querySelector(".fm");
const fLarge = document.querySelector(".fl");



//day names array
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// month name array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const today = new Date();

const dayName = daynames[today.getDay()];
const monthName = months[today.getMonth()];
const dateNum = today.getDate();
const year = today.getFullYear();


fBase.innerHTML = `<strong>&copy; ${year} Uyo Chammber <br> Ojo-Osasere Marcus <br> WDD 230 Project <br> Last Modification: ${document.lastModified} </strong>`;
fMed.innerHTML = `<strong>&copy; ${year} Uyo Chammber | Ojo-Osasere Marcus | WDD 230 Project |<br> Last Modification: ${document.lastModified} </strong>`;
fLarge.innerHTML = `<strong>&copy; ${year} Uyo Chammber | Ojo-Osasere Marcus | WDD 230 Project | Last Modification: ${document.lastModified} </strong>`;

document.querySelector(".date").innerHTML = `<p><strong>${dayName}, ${dateNum} ${monthName} ${year}</strong></p>`;

window.addEventListener("load", () => {
    console.log(dateNum);
    if (dateNum == 1 || dateNum == 2) {
        document.querySelector(".banner").style.display = "block";
    } else {
        document.querySelector(".banner").style.display = "none";
    }
});