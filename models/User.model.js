const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Por favor insira o Email"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Por favor insira a Password."],
    },

    name: {
      type: String,
      required: [true, "Por favor insira um Nome."],
    },

    image: {type: String, default: "https://res.cloudinary.com/dirrmfung/image/upload/v1669491384/defaultUser-removebg-preview_wpyxid.png"},

    sustainableFisherNumber: {
      type: String, 
      trim: true, 
      default: null
    },

    fishes: [{ type: Schema.Types.ObjectId, ref:'Fish' }],

    fisheries: [
      { type: Schema.Types.ObjectId, ref:'Fishery' } 
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;