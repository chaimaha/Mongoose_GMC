//import

import contact from "../Models/Contact.js";
//---------------------------------------------------------

//Methode && export
//ADD-contact
export const ADD_POST = async (req, res) => {
  try {
    //Email control
    const findContact = await contact.findOne({ email: req.body.email });
    if (findContact) {
      return res.status(400).send("exesting email");
    }
    //add contact
    console.log(req.body);
    const newContact = new contact(req.body);
    newContact.save();

    await res.status(200).send({ msg: "add with success", contact });
  } catch (error) {
    res.status(400).send("error", error);
  }
};
//Get ALL Contacts => find()
export const Get_All_Conatct = async (req, res) => {
  try {
    const contacts = await contact.find();
    res.status(200).send({ msg: "all contacts ", contacts });
  } catch (error) {
    res.status(400).send({ msg: "bad request", error });
  }
};
// get one element by id => findById
export const Get_ele_byID = async (req, res) => {
  try {
    const oneContact = await contact.findById(req.params.id);
    res.status(200).send({ msg: "find ID with succes", oneContact });
  } catch (error) {
    res.status(400).send("bad request ");
  }
};
// Delete element by id pass in params
export const Delete = async (req, res) => {
  try {
    await contact.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "deleted succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete" });
  }
};
//Update one element
export const Update = async (req, res) => {
  try {
    const newc = await contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    // res.send("updated");
    if (newc.modifiedCount) {
      return res.send({ msg: "updated" });
    }
    res.send({ msg: "there is no modification" });
  } catch (error) {
    res.send("can not modified");
  }
};
