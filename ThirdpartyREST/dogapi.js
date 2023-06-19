let apiURL =
  "https://api.thedogapi.com/v1/breeds?limit=3%27%20%20--header%20%27Content-Type:%20application/json";
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
async function getDogFacts() {
  try {
    const response = await fetch("http://localhost:3000/api/dog/");
    const result = await response.json();
    console.log(result);

    document.getElementById("nameinfo").innerHTML =
      "My name is " + result.data[0].vorname + " " + result.data[0].nachname;
    document.getElementById("dbinfo").innerHTML =
      "<ul><li>" +
      result.data[0].strasse +
      " " +
      result.data[0].hausnummer +
      " ;PLZ " +
      result.data[0].plz +
      "</li><li>" +
      result.data[0].ort +
      "</li></ul><br/>" +
      result.message;
  } catch (e) {
    console.log("Fehler" + e);
  }
}
