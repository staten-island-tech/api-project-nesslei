import "./style.css";

const url = "https://deezerdevs-deezer.p.rapidapi.com/album/";
const Surl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

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
        <h2 class = "p" alt ="Song ${json.title}"> ${json.title} </h2> 
        <h3 alt = "${track.title}"> ${track.title} </h3> 
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
