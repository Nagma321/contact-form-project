const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(__dirname)); // serve html files

app.post("/save", (req, res) => {

    const data = `${req.body.name}, ${req.body.email}, ${req.body.message}\n`;

    fs.appendFile("data.txt", data, (err) => {
        if (err) {
            res.send("Error");
        } else {
            res.send("Message saved successfully!");
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
