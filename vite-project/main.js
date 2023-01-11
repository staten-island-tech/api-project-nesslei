import "./style.css";

const games = "https://www.freetogame.com/api/games";

async function getData(games) {
  try {
    const response = await fetch(games);
    if (response.status < 200 || response.status > 299) {
      console.Log(response.status);
      throw error(response);
    } else {
      const data = await response.json();

      data.results.forEach((games) => {
        document.getElementById("display").insertAdjacentHTML(
          "afterbegin",
          `<div class = "card"
          <h1> "${games.title}"</h1>
          <img src=${games.thumbnail} alt = "">       
          </div>`
        );
      });
    }
  } catch (error) {
    console.log("error");
    document.getElementById("display").textContent = "u suck";
  }
}
getData(URL);
