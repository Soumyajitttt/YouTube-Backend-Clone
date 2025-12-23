import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";

dotenv.config();

const port = process.env.PORT;

connectDB();

try{
    app.listen(port, () => {
    console.log("Server is running on port " + port);
    })
} catch(error){
    console.error("Error starting server (index.js:)", error.message);
}