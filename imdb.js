const searchButton = document.getElementById('searchButton')
const searchBar = document.getElementById('searchBar')
const title = document.getElementById('title')
const miscInfo = document.getElementById('miscInfo')
const rating = document.getElementById('rating')
const genre = document.getElementById('genre')
const plot = document.getElementById('plot')
const writer = document.getElementById('writer')
const actors = document.getElementById('actors')
const poster = document.getElementById('poster')
const imgDiv = document.getElementById('imgDiv')








async function goFetch(){
    try{let searchVal = searchBar.value
        const response = await fetch(`https://www.omdbapi.com/?apikey=607bb5a1&t=${searchVal}&plot=full`)

        const data = await response.json()
        if (data.Response === "False"){
            alert('Invalid -- Search A Movie or Series')
            throw new Error('couldnt fetch')
            }
        
        console.log(data)

        title.innerHTML = `${data.Title}`

        miscInfo.innerHTML = `${data.Language} | ${data.Type} | ${data.Year} | ${data.Rated} | ${data.Runtime}`

        rating.innerHTML = `IMDB: ${data.imdbRating}/10`

        genre.innerHTML = `Genre: ${data.Genre}`

        plot.innerHTML = `${data.Plot}`

        writer.innerHTML = `Writer: ${data.Writer}`

        actors.innerHTML = `Actor: ${data.Actors}`

        imgDiv.innerHTML = `<img style="object-fit: cover; width:100%;height:100%; border-radius:10px; border:1px solid black" src='${data.Poster}' >`


        }                                                                       
    
    catch(error){
        console.log(error)
    }
}

searchButton.addEventListener('click', goFetch)
