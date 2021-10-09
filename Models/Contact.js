import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: String,
  age: Number,
});
const contact = mongoose.model("contact", contactSchema);
// mongoose.model = ("contact", contactSchema);
export default contact;
