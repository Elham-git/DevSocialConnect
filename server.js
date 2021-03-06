const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("api is running");
});

// define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const port = process.env.port || 5000;

app.listen(port, () => console.log(`server running on port ${5000}`));
