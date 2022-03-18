const directoryURL = "./data/data.json";

function make_spotlight(businesses) {
  //Create list items from each item of the fetched list
  let numList = [];

  while (numList.length < 3) {
    num = Math.trunc(Math.random() * 12);
    !numList.includes(num) && numList.push(num);
    console.log(num);
  }

  const bizOne = businesses[numList[0]];
  const bizTwo = businesses[numList[1]];
  const bizThree = businesses[numList[2]];
  console.log(numList);

  return `<div class="spotlight1">
          <h4>${bizOne.name}</h4>
          <img src="${bizOne.imageurl}" alt="${bizOne.name}" loading="lazy"/>
          <h5>${bizOne.decscription}</h5>
          <span class="underline"></span>
          <p class="spot-email">${bizOne.email}</p>
          <p class="spot-number">${bizOne.number} | <a href="${bizOne.website}"  target="_blank">Website</a></p>
        </div>
        <div class="spotlight2">
          <h4>${bizTwo.name}</h4>
          <img src="${bizTwo.imageurl}" alt="${bizTwo.name}" loading="lazy"/>
          <h5>${bizTwo.decscription}</h5>
          <span class="underline"></span>
          <p class="spot-email">${bizTwo.email}</p>
          <p class="spot-number">${bizTwo.number} | <a href="${bizTwo.website}" target="_blank">Website</a></p>
        </div>
        <div class="spotlight3">
          <h4>${bizThree.name}</h4>
          <img src="${bizThree.imageurl}" alt="${bizThree.name}" loading="lazy"/>
          <h5>${bizThree.decscription}</h5>
          <span class="underline"></span>
          <p class="spot-email">${bizThree.email}</p>
          <p class="spot-number">${bizThree.number} | <a href="${bizThree.website}"  target="_blank">Website</a></p>
        </div>`;
}

fetch(directoryURL)
  .then((response) => {
    return response.ok ? response.json() : console.log("error");
  })
  .then((data) => {
    let businesses = data["businesses"];

    const spot = make_spotlight(businesses);

    document.querySelector(".spot").innerHTML = spot;
  });
