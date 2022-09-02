const cunty = document.getElementsByClassName("watch-container")
const container = document.getElementById("watch-me")
const beforeSearch = document.getElementById("before-search")
const main = document.getElementsByClassName("main-container")
const movies = document.getElementsByClassName("movies-to-watch")
const local = localStorage
let html = ``
const hr = document.createElement("hr")


function setLocal(){
    for (let i = 0; i < local.length; i++){
        html = local.getItem(local.key(i))
        setWatchlist(html)
    }
    
}
local.length > 0 ? setLocal() : watchHomePage()

function watchHomePage(){
    container.innerHTML = `
    <div id="before-search">
    <img id="movie-reel" src="images/moviereel.png">
    <p>No movies Yet!</p>
</div>
    `
}

function setWatchlist(html){
    container.innerHTML += `${html}`
    container.appendChild(hr)
    setRemoveButton()
}

function setRemoveButton(dang){
    const watchBtn = document.getElementsByClassName("watchlistBtn")
    for (let i = 0; i < watchBtn.length; i++){
    watchBtn[i].innerHTML = `<span>  - </span>  Remove`
        watchBtn[i].addEventListener("click",function(){
            local.removeItem(local.key(i))
            container.innerHTML = ``
            setLocal()
        })
    }

}