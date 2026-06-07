const mongoose = require("mongoose");

const SkillsSchema = new mongoose.Schema({
    naam: String,
    level: Number
});

module.exports = mongoose.model("skills", SkillsSchema);