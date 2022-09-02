const list = document.getElementsByClassName("movies-list")
const watchBtn = document.getElementsByClassName("add-watchlist")
const mainCon = document.getElementsByClassName("watch-container")

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





export {MovieList}