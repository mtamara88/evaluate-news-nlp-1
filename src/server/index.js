const dotenv = require("dotenv");
dotenv.config();

const API_KEY = process.env.API_KEY;

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');


const app = express()
app.use(express.static('dist'))

console.log(__dirname)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('/src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

// POST method
app.post('/userData', async (req, res) => {
    let articleURL = req.body.fromText;

    console.log('url sent to the server', articleURL);

    const resp = await fetch("https://api.meaningcloud.com/sentiment-2.1?key=" + API_KEY + "&url=" + articleURL + "&lang=en");

    try {
        const data = await resp.json();
        res.send(data);
    } catch (error) {
        console.log("error", error);
    }
    resp();
})