const directoryURL = "./data/data.json";

function make_news(news) {
  //A function that creates and returns 3 news items
  let newsList = list_maker(8);
  const newsOne = news[newsList[0]];
  const newsTwo = news[newsList[1]];
  const newsThree = news[newsList[2]];

  return ` <ul>
              <li>
                <a href="${newsOne.link}" target="_blank">${newsOne.title}</a>
              </li>
              <li>
                <a href="${newsTwo.link}" target="_blank">${newsTwo.title}</a>
              </li>
              <li>
                <a href="${newsThree.link}" target="_blank">${newsThree.title}</a>
              </li>
            </ul>`;
}

const list_maker = (number) => {
  //A function that creates and returnsa list that contains 3 random numbers

  let numList = [];

  while (numList.length < 3) {
    num = Math.trunc(Math.random() * number);
    !numList.includes(num) && numList.push(num);
  }

  return numList;
};
function make_spotlight(businesses) {
  //A function that creates and returns 3 business items

  let goldSIlverBusinesses = [];

  for (let i = 0; i < businesses.length; i++) {
    const bizItem = businesses[i];
    bizItem["membership"] === "gold" || bizItem["membership"] === "silver"
      ? goldSIlverBusinesses.push(bizItem)
      : {};
  }

  // pick a gold or silver member at random
  bizList = list_maker(goldSIlverBusinesses.length);

  const bizOne = goldSIlverBusinesses[bizList[0]];
  const bizTwo = goldSIlverBusinesses[bizList[1]];
  const bizThree = goldSIlverBusinesses[bizList[2]];

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
    let news = data["news"];

    const spot = make_spotlight(businesses);
    const pageNews = make_news(news);

    document.querySelector(".spot").innerHTML = spot;
    document.querySelector(".new").innerHTML += pageNews;
  });
