const app  = require("./app");
const dotenv = require("dotenv");


dotenv.config({ path : "/config/.env"});

const server = app.listen(process.env.PORT, () => {
    console.log(`server started on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

//handling uncaught exception

process.on("uncaughtException", err => {
    console.log(`ERROR : ${err.stack}`) // stack defines 
    console.log(`Shutting down due to uncaught exception`);
    process.exit(1);
})
// console.log(a) // error should be below uncaughtexception code

// dotenv.config({  path : "backend/config/config.env"})

//SETTING UP cloudinary configuration
// cloudinary.config({
//     cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
//     api_key : process.env.CLOUDINARY_API_KEY,
//     api_secret : process.env.CLOUDINARY_API_SECRET
// })


//handling unhandled promise rejection
process.on('unhandledRejection', err => {
    console.log(`ERROR : ${err.message}`);
    console.log(`Shutting down the server due to Unhandled promise rejection`);
    server.close(() => {
        process.exit(1);
    })
})
