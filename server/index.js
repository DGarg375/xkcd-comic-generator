const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
    console.log("Loading starting page on client side");
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});