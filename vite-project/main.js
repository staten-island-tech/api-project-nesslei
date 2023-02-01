import "./style.css";

const url = "https://deezerdevs-deezer.p.rapidapi.com/album/";
const Surl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

/* fix this 
function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";
    
  if(hh > 12){
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000); 

}

currentTime();
*/


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "82720bd7d6msh2d19c07fd7db3ddp1297f3jsn24bf33fef3b4",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
async function getAlbumId(search) {
  let res = await fetch(Surl + search, options);
  let json = await res.json();
  console.log(json);
  return json.data[0].album.id;
}
async function showAlbum(id) {
  let res = await fetch(url + id, options);
  let json = await res.json();
  document.getElementById("display").innerHTML = "";
  console.log(json);
  json.tracks.data.forEach((track) => {
    document.getElementById("display").insertAdjacentHTML(
      "afterbegin",
      `
        <div class = "card" >
        <img src="${json.cover}" alt = "This is ${json.title} ${track.title} album cover ">
        <h2 alt = "${track.title}"> ${track.title} </h2> 
        <h3 class = "p" alt ="Song ${json.title}"> ${json.title}</h3> 
        <audio class = "audio" controls  src=${track.preview}>
        </div>
        `
    );
  });
  return true;
}

async function main(search) {
  let id = await getAlbumId(search);
  await showAlbum(id);
}
main("");

document
  .getElementById("searchButton")
  .addEventListener("click", async function () {
    let search = document.getElementById("searchBar").value;
    await main(search);
  });
