const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
    naam: String,
    level: Number
});

module.exports = mongoose.model("skill", SkillSchema);