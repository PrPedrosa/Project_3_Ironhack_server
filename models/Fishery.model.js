const { Schema, model } = require("mongoose");

const fisherySchema = new Schema(
    {
      number: { type: Number, unique: true, required: true },

      image: { type: String, default: "default pic" },
      
      date: {type: String, required: true},

      location: {
        type: String,
        enum: [
          "Em frente à praia da Parede",
          "Em frente à praia das Avencas",
          "Em frente a praia de S. Pedro",
          "Em frente à praia da Bafureira"
        ]
      },
      /* {
        lat: {type: String, required: true}, 
        long: {type: String, required: true}
      }, */
      overallWeight: {type: Number, default: null},

      userId: {type: Schema.Types.ObjectId, ref: "User"},

      fishes: [ 
        {
            species: {type: Schema.Types.ObjectId, ref:'Fish'},
            amount: {type: Number, default: null}, 
            weight: {type: Number, default: null}
        } 
      ],

    },
    {
        timestamps: true
    }
)

const Fishery = model("Fishery", fisherySchema);

module.exports = Fishery