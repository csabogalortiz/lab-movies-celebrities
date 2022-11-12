
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Celebrity'       // Nombre del modelo
    }],
},
    {
        timestamps: true
    }
)
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

