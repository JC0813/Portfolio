const mongoose = require("mongoose");

const ProjectenSchema = new mongoose.Schema({
    naam: String,
    level: Number,
    category: String
});

module.exports = mongoose.model("projects", ProjectenSchema);