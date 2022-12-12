
/* adding scripting for spell search API */

// inputs for the search-bar
let searchInput = document.getElementById('search');
let searchBtnClick = document.getElementById('search-button');
let spellTitleEl = document.getElementById('spell-title');
let spellDescriptionEl = document.getElementById('spell-description');
let modal = document.getElementById("myModal");
let span = document.getElementById("close");
let resultModal = document.getElementById('resultModal')
let history = document.getElementById('history')

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
  // running spellsearch function (calling API)
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

    // running spellSearch function (calling API)
    spellSearch(caseCorrect);
  }
})


// function that searches dnd spells API with variable from above
function spellSearch(spell) {
  const spells_api_url = `https://www.dnd5eapi.co/api/spells/${spell}`;

  fetch(spells_api_url).then(res => res.json()).then(spellData => {
    console.log(spellData);
    spellTitleEl.textContent = spellData.name;
    spellDescriptionEl.textContent = spellData.desc;
  });

}


function test(num) {

  let APIurl = 'http://www.randomnumberapi.com/api/v1.0/random?min=1&max=' + num + '&count=1'
  let result = 'ah'

  fetch(APIurl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      modal.style.display = "block";
      result = 'D' + num + ' = ' + data
      resultModal.innerHTML = 'You rolled ' + result
      createResult(result)
    })
}

// seprate function outside of fetch func to keep code readable
function createResult(result) {

  const element = document.createElement('div')
  element.classList.add("box")
  element.innerHTML = result
  history.appendChild(element);
}

// runs best outside of fetch func
span.onclick = function () {
  modal.style.display = "none";
}


// gif showing
let diceContainer = document.getElementsByClassName('diceContainer')

diceContainer.addEventListener('click', (event) => {
  const img = document.createElement('img');
  img.src = 'https://media.giphy.com/media/dHmlDXivhdfcrkCgYq/giphy.gif'; // URL of the GIF

  // show the GIF for 2 seconds
  const gifContainer = document.getElementById('gif-container');
  gifContainer.appendChild(img);
  setTimeout(() => {
    gifContainer.removeChild(img);
  }, 2000);
}) 