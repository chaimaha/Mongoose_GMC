//import
import { Router } from "express";
import {
  ADD_POST,
  Delete,
  Get_All_Conatct,
  Get_ele_byID,
  Update,
} from "../Controllers/ContactContoller.js";

import contact from "../Models/Contact.js";
const routes = Router();

//methode

// routes.get("/test", (req, res) => {
//   res.send("test");
// });
//CRUD

//ADD_POST
routes.post("/add", ADD_POST);
//get all contacts (routes.get)
routes.get("/", Get_All_Conatct);
//get element by ID
routes.get("/:id", Get_ele_byID);
//Delete element
routes.delete("/:id", Delete);
//Update element
routes.put("/:id", Update);
//export
export default routes;
