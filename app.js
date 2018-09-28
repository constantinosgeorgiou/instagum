// configure dotenv
require('dotenv').load();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Database config
const databaseUri = process.env.MONGODB_URI;
mongoose.connect(databaseUri)
    .then(() => console.log(`Database connected`))
    .catch(err => console.log(`Database connection error: ${err.message}`));


app.set("view engine", "ejs");


// Requiring routes
const commentRoutes = require("./routes/comments"),
      postRoutes    = require("./routes/posts"),
      indexRoutes   = require("./routes/index"),
      userRoutes    = require("./routes/users");

// Using routes
app.use("/", indexRoutes);
app.use("/posts", postRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/users", userRoutes);

// Where the app is available


app.listen(process.env.PORT, process.env.IP, () => console.log(`\nApp listening on port ${process.env.PORT}!\n`));