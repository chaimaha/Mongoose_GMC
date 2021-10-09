//import-----------------------
import Express, { json } from "express";
import dotenv from "dotenv";
import ConnectDB from "./Config/ConnnectDB.js";
import routes from "./Router/Contact.js";

//--------------------------------
//constant
dotenv.config();
const app = Express();
const PORT = process.env.PORT;
//Methode
//Connect to data base
ConnectDB();
//--------------------------------
//Route
//Json
//middleware for the contact routes
app.use(Express.json());
app.use("/contact", routes);

//Server
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server running on ${PORT}`)
); //---------------
