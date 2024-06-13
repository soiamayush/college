const express = require("express");
const cloudinary = require("cloudinary");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "config/.env" });
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
const bodyParser = require("body-parser");
const path = require("path");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middlewares/error.js");

app.use(fileUpload());
app.use(express.json({ limit: "50mb" }));

app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "config/.env" });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Import all routes
const products = require("./routes/product");
const auth = require("./routes/auth");
const payment = require("./routes/payment");
const order = require("./routes/order");
const connectDatabase = require("./config/database.js");
connectDatabase();

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", payment);
app.use("/api/v1", order);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "./frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./frontend/dist/index.html"));
  });
}

// Middleware to handle errors
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `server started on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//handling uncaught exception

process.on("uncaughtException", (err) => {
  console.log(`ERROR : ${err.stack}`); // stack defines
  console.log(`Shutting down due to uncaught exception`);
  process.exit(1);
});
// console.log(a) // error should be below uncaughtexception code

// dotenv.config({  path : "backend/config/config.env"})

//SETTING UP cloudinary configuration
// cloudinary.config({
//     cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
//     api_key : process.env.CLOUDINARY_API_KEY,
//     api_secret : process.env.CLOUDINARY_API_SECRET
// })

//handling unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR : ${err.message}`);
  console.log(`Shutting down the server due to Unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;
