const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("api is running");
});

const port = process.env.port || 5000;

app.listen(port, () => console.log(`server running on port ${5000}`));
