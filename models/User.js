import mongoose from "mongoose";

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      reqired: true,
    },
  },
  {
    timestamps: true,
  }
);
