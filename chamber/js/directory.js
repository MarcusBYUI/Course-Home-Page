const cardList = document.querySelector(".card-list");
const directoryURL = "./data/data.json";
const medium = window.matchMedia("(min-width:545px) and (max-width: 1079px)");

let width = window.innerWidth;

function make_cards(business) {
  //Create cards from each item of the fetched list
  return `<div class="card">
            <img src = ${business.imageurl} alt = ${business.name} loading="lazy">
            <address>${business.street}, ${business.city}</address>
            <p>${business.number}</p>
            <a href="${business.website}" target="_blank">${business.website}</a>
        </div>`;
}

function make_list(business) {
  //Create list items from each item of the fetched list

  return `
    <tr>
    <td class="name">${business.name}</td>
    <td class="list-address">${business.street},<br>${business.city}</td>
    <td class="list-number">${business.number}</td>
    <td><a href="${business.website}" target="_blank">${business.website}</a></td>
    </tr>`;
}

class setDefView {
  // initialzes with a def view then the method setView checks to set a default view on resize but prevent the chrome mobile
  // scroll resize from triggering the resize event

  constructor(medium, list) {
    this.list = list;

    if (medium.matches) {
      // If media query matches
      listView(this.list);
    } else {
      gridView(this.list);
    }
  }

  setView(medium) {
    //checks the viewport and set the defailt view either grid or list
    if (window.innerWidth != width) {
      if (medium.matches) {
        // If media query matches
        listView(this.list);
      } else {
        gridView(this.list);
      }
    }
  }
}

// Fetch the JSON data for the directory
fetch(directoryURL)
  .then((response) => {
    return response.ok ? response.json() : console.log("error");
  })
  .then((data) => {
    let businesses = data["businesses"];

    //A calls the funtion that sets the default view for medium screen as list ans leaves the rest as cards
    const defView = new setDefView(medium, businesses);
    defView.setView(medium);
    window.addEventListener("resize", () => defView.setView(medium));

    //event listener for button click
    document
      .querySelector("#grid-view")
      .addEventListener("click", () => gridView(businesses));
    document
      .querySelector("#list-view")
      .addEventListener("click", () => listView(businesses));
  });

function gridView(business) {
  // change button color to currently active
  let gridBtn = document.querySelector("#grid-view");
  let listBtn = document.querySelector("#list-view");

  gridBtn.style.backgroundColor = "white";
  listBtn.style.backgroundColor = "#A9D6E5";

  //sends the grid view to the html page
  cardList.innerHTML = "";
  const card = business.map(make_cards);
  const cards = document.createElement("section");
  cards.innerHTML = card.join(" ");
  cards.className = "cards";
  cardList.appendChild(cards);
}

function listView(business) {
  // change button color to currently active
  let gridBtn = document.querySelector("#grid-view");
  let listBtn = document.querySelector("#list-view");

  gridBtn.style.backgroundColor = "#A9D6E5";
  listBtn.style.backgroundColor = "white";
  //sends the list view to the html page

  cardList.innerHTML = "";

  const list = business.map(make_list);
  const items = document.createElement("tbody");
  items.innerHTML = list.join(" ");
  items.className = "list";
  cardList.appendChild(items);
}
