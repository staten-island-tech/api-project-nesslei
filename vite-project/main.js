import "./style.css";

const URL = "https://deezerdevs-deezer.p.rapidapi.com/artist/The%20Weeknd";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '868afab899msh18229938fd806e0p1740e9jsn539d4b22a966',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

async function getData(URL) {
  try {
    const response = await fetch (
      "https://deezerdevs-deezer.p.rapidapi.com/artist/The%20Weeknd",
      options
    ); 
    const data = await response.json(); 
    console.log(data); 
    } catch (error) {
      console.log(error); 
    }
  }
  getData(URL); 

