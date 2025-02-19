import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  role: { type: String, default: "user" },
  theme: { type: Boolean, default: false },
  postRequest: { type: Boolean, default: false, require: true },
  roleRequest: { type: Boolean, default: false, require: true },
  imageUrl: String,
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: String, default: "" },
});

const UserModels = mongoose.model("user", userSchema);
export default UserModels;
