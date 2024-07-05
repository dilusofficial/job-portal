import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },

    dateOfBirth: {
      type: Date,
    },
    age: {
      type: Number,
    },
    image: {
      type: String,
    },
    imagePublicId: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
    },
    address: {
      type: String,
    },
    otp: {
      type: String,
    },
    hasVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    hobbies: {
      type: [String],
    },
    interest: {
      type: [String],
    },
    drinking: {
      type: String,
      enum: ["Often", "Occasional", "Never"],
    },
    smoking: {
      type: String,
      enum: ["Often", "Occational", "Never"],
    },
    highestQualification: {
      type: String,
      enum: [
        "High School",
        "Higher Secondary",
        "Diploma",
        "Bachelors Degree",
        "Masters Degree",
        "Doctorate",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", UserSchema);

export default User;
