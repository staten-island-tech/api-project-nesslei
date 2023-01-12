import "./style.css";

const pets =
  "http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]";

async function getData(pets) {
  try {
    const response = await fetch(pets);
    if (response.status < 200 || response.status > 299) {
      console.Log(response.status);
      throw error(response);
    } else {
      const data = await response.json();

      data.forEach((pets) => {
        document.getElementById("display").insertAdjacentHTML(
          "afterbegin",
          `<div class = "card"
          <h1> ${pets.title}</h1>
          <img src="${pets.thumbnail}" alt = "">       
          </div>`
        );
      });
    }
  } catch (error) {
    console.log(error);
    console.log("u suck");
    document.getElementById("display").textContent = "u suck";
  }
}
getData(pets);
