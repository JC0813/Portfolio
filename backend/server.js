const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Project = require("./models/project");
const Skill = require("./models/skill");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/db1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("MongoDB verbonden!"));

//API Projecten
app.get("/projecten", async (req, res) => {
    try {
        const projecten = await Project.find(); //haal alle records op
        res.json(projecten);

    } catch (error) {
        res.status(500).json({ message: "fout bij ophalen van de projecten", error });
    };

});

//API skills
app.get("/skills", async (req, res) => {
    try {
        const skills = await Skill.find(); //haal alle records op
        res.json(skills);
    } catch (error) {
        res.status(500).json({ message: "fout bij ophalen van de skills", error });
    };

});

app.listen(5000, () => console.log("de server draait op poort 5000"));