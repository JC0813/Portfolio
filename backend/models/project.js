const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    naam: String,
    beschrijving: String,
    tags: String,
});

module.exports = mongoose.model("project", ProjectSchema);