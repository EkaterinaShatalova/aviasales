const inputCitiesFrom = document.querySelector(".input__cities-from");

inputCitiesFrom.addEventListener("input", () => {
  console.log("событие инпут");
});
const inputCitiesTo = document.querySelector(".input__cities-to");

inputCitiesTo.addEventListener("input", () => {
  console.log("событие инпут");
});
const inputDepart = document.querySelector(".input__date-depart");

inputDepart.addEventListener("input", () => {
  console.log("событие инпут");
});

// const cities = JSON.parse(cities.json);

// console.log(cities);

// fetch("https://example.com/main.json")
//   then(((response)) => response.json())
//  .then(((json)) => {
//   //console.log(json);
//  });;

const button = document.querySelector(".button__search");
