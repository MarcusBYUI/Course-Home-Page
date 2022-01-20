const year = new Date().getFullYear();


// to get last modiified
const string = document.lastModified;

document.querySelector(".year").innerHTML = `© ${year} | Marcus A. Ojo-Osasere | Last Updated: ${string}`