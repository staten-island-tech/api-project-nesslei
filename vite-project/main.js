import "./style.css";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "868afab899msh18229938fd806e0p1740e9jsn539d4b22a966",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch(
  "https://cors-anywhere.herokuapp.com/https://deezerdevs-deezer.p.rapidapi.com/playlist/%7Bid%7D",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
