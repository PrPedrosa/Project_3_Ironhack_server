const { Schema, model } = require("mongoose");

const fishSchema = new Schema(
  {
    commonName: { type: String, required: true, unique: true, trim: true },

    scientificName: {type: String, unique: true, trim: true},

    image: { type: String, default: "default pic"},

    description: { type: String, trim: true, default: null},

    threatCategory: {type: String, trim: true, default: "Unknown"},

    habitat: {type: String, trim: true, default: "Unknown"},

    maxLength: {type: Number, default: null},

    areaFound: {type: String, trim: true, default: "Unknown"},

    minCatchSize: {type: Number, default: null},

    minCatchWeight: {type: Number, default: null},

    totalAmountCatched: {type: Number, default: null},

    weight: {type: Number, default: null},

    length: {type: Number, default: null},

    userCreated: {type: Boolean, default: false}
  },
  {
    timestamps: true
  }
);

const Fish = model("Fish", fishSchema)

module.exports = Fish;