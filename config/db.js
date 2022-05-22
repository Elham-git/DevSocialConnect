const mongoose = require("mongoose");

const config = require("config");

const db = config.get("MongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewURLParser: true });
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

// token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4MzM5MzEzZDEwMjUyZWYwYWY4MjYwIn0sImlhdCI6MTY1MzE1NDYxNH0.3GEVpKTUrtP-iD2I7MUv7-sx4-2VT6CXGTlxgAA4Vjw"
