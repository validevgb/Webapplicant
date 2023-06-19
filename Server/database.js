const sqlite3 = require("sqlite3");

let db = new sqlite3.Database("dog.db", (err) => {
  if (err) {
    return;
  }
  console.log("Connected to DB");
  db.run(
    `CREATE TABLE dog (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nachname TEXT NOT NULL,
vorname TEXT,
created INTEGER,
updated INTEGER,
strasse TEXT,
hausnummer TEXT,
plz TEXT,
ort TEXT)`,
    (err) => {
      if (err) {
        return;
      }
      let insert =
        "INSERT INTO dog (nachname, vorname, created, updated, strasse, hausnummer, plz, ort) VALUES (?,?,?,?,?,?,?,?)";
      db.run(insert, [
        "Van Bellen",
        "Labrakadabrador",
        Date.now(),
        Date.now(),
        "Musterstrasse",
        "12",
        "12345",
        "Musterstadt",
      ]);
    }
  );
});

module.exports = db;
