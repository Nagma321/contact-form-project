const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/save", (req, res) => {

    const data = `${req.body.name}, ${req.body.email}, ${req.body.message}\n`;

    fs.appendFile("data.txt", data, (err) => {
        if (err) {
            res.send("Error saving data");
        } else {
            res.send("Message saved successfully!");
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
