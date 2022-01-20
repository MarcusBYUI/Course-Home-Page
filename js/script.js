const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = `© ${year} || Marcus A. Ojo-Osasere || Akwa Ibom`

//get last modified
const string = document.lastModified;

document.querySelector(".updated").innerHTML = `Last Updated: ${string}`