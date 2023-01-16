import "./style.css";

const url = 'https://deezerdevs-deezer.p.rapidapi.com/album/14652356';

const options = {
 method: 'GET',
 headers: {
   'X-RapidAPI-Key': '82720bd7d6msh2d19c07fd7db3ddp1297f3jsn24bf33fef3b4',
   'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
 }
}; 

fetch(url, options)
.then(res => res.json())
.then(json => { 

  console.log(json)
  json.tracks.data.forEach((track) => {
    document.getElementById("display").insertAdjacentHTML(
      "afterbegin", 
      `<div class = "card" >
      <img src="${json.cover}" alt = "">
      <h2> ${json.title} </h2> 
      <h3> ${track.title} </h3> 
      <audio controls  src=${track.preview}>
      </div>
      `
    )
  })
})

.catch(err => console.error('error:' + err));

