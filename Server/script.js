async function getDogFacts() {
  try {
    const response = await fetch("http://localhost:3000/api/dog/");
    const result = await response.json();
    console.log(result);

    document.getElementById("nameinfo").innerHTML =
      "My name is" +
      result[0].data[0].nachname +
      " " +
      result[0].data[0].vorname;
    document.getElementById("dbinfo").innerHTML =
      result.data[0].strasse +
      "<ul><li>" +
      result.data[0].hausnummer +
      "</li><li>" +
      result.data[0].plz +
      "</li><li>" +
      result.data[0].ort +
      "</li></ul>";
  } catch (e) {
    console.log("Fehler" + e);
  }
}
