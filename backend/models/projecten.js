const mongoose = require("mongoose");

const ProjectenSchema = new mongoose.Schema({
    naam: String,
    beschrijving: String,
    tags: String,
});

module.exports = mongoose.model("projecten", ProjectenSchema);