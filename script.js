const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = `© ${year} || Marcus A. Ojo-Osasere || Akwa Ibom`


const dateObj = new Date();

//to get that dates
const month = dateObj.getUTCMonth() + 1; //months from 1-12
const day = dateObj.getUTCDate();

// to get time
const hours = dateObj.getHours();
const minutes = dateObj.getMinutes();
const seconds = dateObj.getSeconds();


document.querySelector(".updated").innerHTML = `Last Updated: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;