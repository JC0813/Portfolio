const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Project = require("./models/projecten");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/db1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("MongoDB verbonden!"));

//API TEST
app.get("/api", (req,res) => {
    console.log('testing')
    res.json({ message: "Hallo vanaf de backend!" });
});

//API SKILLS
app.get("/projects", async (req,res) => {
    try {
        const projects = await Project.find(); //haal alle records op
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "fout bij ophalen van skills", error });
    };

});

app.listen(5000, () => console.log("de server draait op poort 5000"));