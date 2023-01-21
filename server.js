const express = require("express")
const http = require("http")
const cors = require("cors")

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000

const app = express()
//const server = http.createServer(app);

let NPCData = {
    "Roan": {
        type: "NPC",
        location: "Ithan",
        coordinates: "39, 51",

    },
    "Tomasz": {
        type: "NPC",
        location: "Ithan",
        coordinates: "49, 57",

    },
    "Garus Tyrrak": {
        type: "NPC",
        location: "Ithan",
        coordinates: "51, 53",

    },
    "Laura": {
        type: "NPC",
        location: "Ithan",
        coordinates: "49, 46",

    },
    "Tęczowa aukcjonerka": {
        type: "NPC",
        location: "Dom Aukcyjny",
        coordinates: "12, 6",

    },
    "Bard Grant": {
        type: "NPC",
        location: "Ithan",
        coordinates: "40, 25",

    },
    "Starzec Niel": {
        type: "NPC",
        location: "Ithan",
        coordinates: "39, 16",

    },
    "Burmistz Czemkin": {
        type: "NPC",
        location: "Ithan",
        coordinates: "28, 16",

    },
    "Roan": {
        type: "NPC",
        location: "Ithan",
        coordinates: "39, 51",

    },
    "Makatara": {
        type: "NPC",
        location: "Ithan",
        coordinates: "18, 15",

    },
    "Tata Tomasza": {
        type: "NPC",
        location: "Ithan",
        coordinates: "3, 7",

    },
    "Kowal Unil": {
        type: "NPC",
        location: "Ithan",
        coordinates: "73, 52",

    },
    "Makina": {
        type: "NPC",
        location: "Dom Aukcyjny",
        coordinates: "26, 45",

    },
    "Sir Galien": {
        type: "NPC",
        location: "Ithan",
        coordinates: "17, 60",

    },
    "Sprzedawca Eldrik": {
        type: "NPC",
        location: "Ithan",
        coordinates: "32, 61",

    },
    "Huslin": {
        type: "NPC",
        location: "Ithan",
        coordinates: "12, 96",

    }
}
app.get('/data', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", true)
    console.log('asdasdasda');
    res.json(NPCData);
})

app.use(cors())
app.use(express.static("static"))
app.listen(port, hostname, () => {
    console.log(`Serverasdas running at http://${hostname}:${port}/`);
});