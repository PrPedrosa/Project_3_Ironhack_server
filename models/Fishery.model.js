const { Schema, model } = require("mongoose");

const fisherySchema = new Schema(
    {
      name: { type: String, required: true, unique: true },

      image: { type: String },

      fishes: [ 
        {
            species: {type: Schema.Types.ObjectId, ref:'Fish'},
            amount: Number, 
            weight: Number 
        } 
      ],

      date: {type: String, required: true},
   
      location: String,
      /* {
        lat: {type: String, required: true}, 
        long: {type: String, required: true}
      }, */

      overallWeight: {type: Number, default: null},

      sustainableFisherNumber: String
    },
    {
        timestamps: true
    }
)

const Fishery = model("Fishery", fisherySchema);

module.exports = Fishery