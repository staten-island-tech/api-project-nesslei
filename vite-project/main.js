import "./style.css";

const URL = "https://api.quotable.io/randoms";

async function getData(URL) {
  try {
    const resopnse = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      console.timeLog(reospnse.status);
      throw error(response);
    } else {
      const data = await response.json();

      console.log(data.data[0].entry);
    }
  } catch (error) {
    console.log(error);
    console.log("whatever");
    document.getElementById("API-RESPONSE").textContent = "mommy";
  }
}
getData(URL);
