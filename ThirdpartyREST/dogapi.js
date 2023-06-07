let apiURL =
  "https://api.thedogapi.com/v1/breeds?limit=3%27%20%20--header%20%27Content-Type:%20application/json";
let apikey =
  "live_tTCIiyQhNfAlBGzh4PpC8dkerl3htJyYMsq3OlokBoJdFfwR59tVsmwBBhsGAk1b";

async function GetDogInformation() {
  try {
    const response = await fetch(apiURL);
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  let rand1 = Math.floor(Math.random() * 100);
  let rand2 = Math.floor(Math.random() * 100);
  let rand3 = Math.floor(Math.random() * 100);
  document.getElementById("img1").src = data[rand1].image.url;
  document.getElementById("img2").src = data[rand2].image.url;
  document.getElementById("img3").src = data[rand3].image.url;

  document.getElementById("info1").innerHTML =
    data[rand1].name +
    "<ul><li>" +
    data[rand1].bred_for +
    "</li><li>" +
    data[rand1].life_span +
    "</li><li>" +
    data[rand1].temperament +
    "</li></ul>";
  document.getElementById("info2").innerHTML =
    data[rand2].name +
    "<ul><li>" +
    data[rand2].bred_for +
    "</li><li>" +
    data[rand2].life_span +
    "</li><li>" +
    data[rand2].temperament +
    "</li></ul>";
  document.getElementById("info3").innerHTML =
    data[rand3].name +
    "<ul><li>" +
    data[rand3].bred_for +
    "</li><li>" +
    data[rand3].life_span +
    "</li><li>" +
    data[rand3].temperament +
    "</li></ul>";
}
