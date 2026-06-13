import mongoose from "mongoose";

const animalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["Dog", "Cat", "Bird", "Other"],
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      required: true,
    },

    story: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: [
        "Rescued",
        "Under Care",
        "Ready For Adoption",
        "Adopted",
      ],
      default: "Rescued",
    },
  },
  {
    timestamps: true,
  }
);

const Animal = mongoose.model("Animal", animalSchema);

export default Animal;