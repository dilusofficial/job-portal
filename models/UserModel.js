import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    verifiedph: Boolean,
    otp: String,
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", UserSchema);

export default User;
