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

  for (var i = 1; i <= 3; i++) {
    let random = Math.floor(Math.random() * 100);
    document.getElementById("img" + i).src = data[random].image.url;
    document.getElementById("info" + i).innerHTML = GetInfoInnerhtml(random);
  }
}
function GetInfoInnerhtml(rand) {
  return (
    data[rand].name +
    "<ul><li>" +
    data[rand].bred_for +
    "</li><li>" +
    data[rand].life_span +
    "</li><li>" +
    data[rand].temperament +
    "</li></ul>"
  );
}
