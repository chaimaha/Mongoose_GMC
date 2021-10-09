//import
import Mongoose from "mongoose";
//constant
const ConnectDB = async () => {
  try {
    await Mongoose.connect("mongodb://localhost:27017/contactlist");
    console.log("data base connaected");
  } catch (error) {
    console.log("data base not connected", error);
  }
};
//export
export default ConnectDB;
