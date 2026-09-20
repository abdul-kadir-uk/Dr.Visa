// models/Enquiry.js

import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
    },

    visaType: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    message: {
      type: String,
      trim: true,
      maxlength: 3000,
      default: "",
    },

    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  },
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;
