const express = require("express");
const app = express();
const port = 3000;
const db = require("./database.js");
app.use(express.json());
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log("Server läuft auf Port " + port);
});

app.get("/", (req, res) => {
  res.json("Hallo und Willkommen");
});

app.get("/api/dog", (req, res) => {
  let sql = "SELECT * FROM dog ORDER BY nachname";
  let params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      return;
    }
    res.json({
      message: "Data fetched from dog.db",
      data: rows,
    });
  });
});
