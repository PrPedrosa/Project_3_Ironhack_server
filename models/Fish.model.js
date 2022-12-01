const { Schema, model } = require("mongoose");

const fishSchema = new Schema(
  {
    commonName: { type: String, required: true, trim: true },

    scientificName: {type: String, trim: true, default: null},

    image: { type: String, default: "https://res.cloudinary.com/dirrmfung/image/upload/v1669491554/fishDefault-removebg-preview_t1eqc2.png"},

    description: { type: String, trim: true, default: null},

    threatCategory: {type: String, trim: true, default: "Unknown"},

    habitat: {type: String, trim: true, default: "Unknown"},

    maxLength: {type: Number, default: null},

    areaFound: {type: String, trim: true, default: "Unknown"},

    minCatchSize: {type: Number, default: null},

    minCatchWeight: {type: Number, default: null},

    totalAmountCatched: {type: Number, default: 0},

    weight: {type: Number, default: null},

    length: {type: Number, default: null},

    userId : {type: Schema.Types.ObjectId, ref: "User", default: null}
  },
  {
    timestamps: true
  }
);

const Fish = model("Fish", fishSchema)

module.exports = Fish;