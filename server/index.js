const axios = require('axios');
const cors = require('cors');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/getLatest', (req, res) => {
    axios.get('https://xkcd.com/info.0.json')
    .then(response => {
        res.json(response.data);
    });
});

app.get('/getById', (req, res) => {
    const comic_id = req.query.id;
    axios.get(`https://xkcd.com/${comic_id}/info.0.json`)
    .then(response => {
        res.json(response.data);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});