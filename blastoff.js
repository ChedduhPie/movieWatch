import {MovieList} from "/movieHtmlGen.js"


const searchBar = document.getElementById("search-bar")
const searchBtn = document.getElementById("search-button")
const beforeSearch = document.getElementById("before-search")
const movieSection = document.getElementsByClassName("movies-section")

searchBtn.addEventListener("click",function(){
    movieSection[0].innerHTML = ``
    beforeSearch.style.display = "none"
    const search = searchBar.value.replaceAll(" ", "+")
    movieSearch(search)
})

 async function movieSearch(string){
    const res = await fetch(`https://www.omdbapi.com/?s=${string}&apikey=aae68c83`)
    const data = await res.json()
    if (!data.Search){
        console.log("No data")
    } else {
        for (let i = 0; i < 9; i++){
        if(!undefined || null){
        getImdbInfo(data.Search[i].imdbID)
      }
    } 
  }
}

async function getImdbInfo(id){
    const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=aae68c83`)
    const data = await res.json()
    const movies = new MovieList(data)
    movieSection[0].innerHTML += movieSection[0].innerHTML = movies.generateHTML()
    

}

