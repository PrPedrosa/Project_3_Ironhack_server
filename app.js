// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const { isAuthenticated } = require("./middleware/jwt.middleware.js");

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/api", authRoutes);

const fishRoutes = require("./routes/fish.routes");
app.use("/api", fishRoutes);

const trashRoutes = require("./routes/trash.routes");
app.use("/api", trashRoutes);

const fisheryRoutes = require("./routes/fishery.routes");
app.use("/api", isAuthenticated, fisheryRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
