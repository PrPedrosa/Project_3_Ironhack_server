const { Schema, model } = require("mongoose");

const fisherySchema = new Schema(
    {
      number: { type: Number, unique: true, required: true },

      image: { type: String, default: "https://res.cloudinary.com/dirrmfung/image/upload/v1669478014/defaultFishery_v3hol3.jpg" },
      
      date: {type: String, required: true},

      fishingType: {
        type: String,
        enum: [
          "Caça submarina",
          "Pesca com linha",
        ]
      },

      location: {
        type: String,
        enum: [
          "Em frente a praia da Parede",
          "Em frente a praia das Avencas",
          "Em frente a praia de Sao Pedro",
          "Em frente a praia da Bafureira"
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
            species: String,
            length: {type: Number, default: null}, 
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