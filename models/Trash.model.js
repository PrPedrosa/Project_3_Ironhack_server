const { Schema, model } = require("mongoose");

const trashSchema = new Schema(
    {
        image: {type: String, default: "Sem imagem"},
        location: {type: String, required: true},
        trashType: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

const Trash = model("Trash", trashSchema);
module.exports = Trash;