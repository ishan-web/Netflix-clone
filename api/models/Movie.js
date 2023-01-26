const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
    {
    title:{type: String, required: true, unique: true},
    description:{type: String},
    image:{type: String},
    imageTitle:{type: String},
    imagesmall:{type: String},
    trailer:{type: String},
    video:{type: String},
    duration:{type: String},
    year:{type: String},
    genre:{type: String},
    limit:{type: String},
    isSeries: {type: Boolean, default: false},
    },
{
    timestamps: true
}
);

module.exports = mongoose.model("Movie", MovieSchema);
