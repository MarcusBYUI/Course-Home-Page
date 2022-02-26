// Lazy Load

const images = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};



if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);

            }
        });
    });
    images.forEach((img) => {
        observer.observe(img);
    });
} else {
    images.forEach((img) => {
        loadImages(img);
    });
}


// Days since last visit

let todays = Date.now();

// initialize display elements
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let lastVisit = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (lastVisit > 0) {
    let visitGap = Math.abs(todays - lastVisit) / 1000;
    days = Math.floor(visitGap / 86400);
    visitsDisplay.textContent = days;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}

// store the new number of visits value
localStorage.setItem("visits-ls", todays);