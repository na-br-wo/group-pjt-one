// var dropdown = document.querySelector('.dropdown');
// dropdown.addEventListener('click', function(event) {
//   event.stopPropagation();
//   dropdown.classList.toggle('is-active');
// });

/* adding scripting for spell search API */

// inputs for the search-bar
let searchInput = document.getElementById('search');
let searchBtnClick = document.getElementById('search-button');

// event listener to create drop-down menu when user types anything
// in search bar
// searchInput.addEventListener('input', (e) => {
//   const value = e.target.value;
//   console.log(value);
// })

// search function that happens when user clicks search button
searchBtnClick.addEventListener('click', (e) => {
  // preventing refresh of page on button click
  e.preventDefault();

  // taking user input in search bar, replacing any hyphens with spaces
  // so hyphenated search can be appended to API link
  let inputArray = searchInput.value;
  let removeSpace = inputArray.split(" ");
  let addHyphen = removeSpace.join("-");
  let caseCorrect = addHyphen.toLowerCase();
  spellSearch(caseCorrect);
});

// search function that happens when user hits enter key
searchInput.addEventListener('keypress', (search) => {
  // if user hits enter key in search bar, do the search
  if (search.key === "Enter") {

    // taking user input in search bar, replacing any hyphens with spaces
    // so hyphenated search can be appended to API link
    let inputArray = searchInput.value;
    let removeSpace = inputArray.split(" ");
    let addHyphen = removeSpace.join("-");
    let caseCorrect = addHyphen.toLowerCase();

    // console.log(q);
    spellSearch(caseCorrect);
  }
})


// function that searches dnd spells API with variable from above
function spellSearch(spell) {
  const spells_api_url = `https://www.dnd5eapi.co/api/spells/${spell}`;

  fetch(spells_api_url).then(res => res.json()).then(spellData => {
    console.log(spellData);
  });

}