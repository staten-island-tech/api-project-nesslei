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


/*const URL = "https://api.deezer.com/album/14652356";

async function getData(URL) { 
  try {
    const response = await fetch (URL); 
    if(response.status < 200 || response.status > 299) {
      console.log(response.status); 
      throw error(response); 
    } else {
      const data = await response.json(); 

      data.results.forEach((song) => {
        document.getElementById("display").insertAdjacentHTML(
          "afterbegin", 
          `div class = "card" >
          <img src="${song.url}" alt = "">
          </div>
          `
        );
      });
    }
    } catch (error) {
      console.log(error); 
      console.log("u suck"); 
  }
}
  getData(URL); 

  /*  try {
    const response = await fetch (
      "https://api.deezer.com/album/14652356",
      options
    ); 
    const data = await response.json(); 
    console.log(data); 
    } catch (error) {
      console.log(error); 
    }
  }
  getData(URL); */ 