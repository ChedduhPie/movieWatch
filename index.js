// import {MovieList} from "/movieHtmlGen.js"

const list = document.getElementsByClassName("movies-list")
const searchBar = document.getElementById("search-bar")
const searchBtn = document.getElementById("search-button")
const movieSection = document.getElementsByClassName("movies-section")
const watchBtn = document.getElementsByClassName("watchlistBtn")
const hr = document.createElement("hr")

searchBtn.addEventListener("click",function(){
    movieSection[0].innerHTML = ``
    document.getElementById("before-search").style.display = "none"
    const search = searchBar.value.replaceAll(" ", "+")
    movieSearch(search)
})

 async function movieSearch(string){
    const res = await fetch(`https://www.omdbapi.com/?s=${string}&apikey=aae68c83`)
    const data = await res.json()
    if (!data.Search){
      movieSection[0].innerHTML = `No results, please try again!`
    } else {
        for (let i = 0; i < 9; i++){
        if(!undefined && !null){
        getImdbInfo(data.Search[i].imdbID)
      }
    }
  }
}

async function getImdbInfo(id){
    const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=aae68c83`)
    const data = await res.json()
    if(data.Plot.length > 10){
    const movies = new MovieList(data)
    movieSection[0].innerHTML += movies.generateHTML()
    movieSection[0].appendChild(hr)
    movieSection[0]
  }
buttonAssign()
}

function buttonAssign(id){
  for (let i = 0; i < list.length; i++){
    watchBtn[i].addEventListener("click",function(){
      let movieID = list[i].children[0].textContent
      const html = list[i].innerHTML
      localStorage.setItem(`${movieID}`, html)
    })
  }
}

function MovieList(data){
  Object.assign(this, data)

  this.generateHTML = function(){
      const {Title,Poster,Runtime,Genre,Plot,imdbID} = this
      let text = `
      <div class="movies-list">
          <div class="display" id="movieId">${imdbID}</div>

          <div class="moves">
              <img class="movie-poster" src="${Poster}">
              <div class="movie">
                  <p class="movie-title">${Title}</p>
                  <div class="movie-info">
                      <p class="run-time">${Runtime}</p>
                      <p class="movie-genre">${Genre}</p>
                      <button class="watchlistBtn"><span>+</span>  Watchlist</button>
                  </div>
                  <p class="movie-plot">${Plot}</p>
              </div>
          </div>
               
      </div>    
      `
      return text
  }
}



