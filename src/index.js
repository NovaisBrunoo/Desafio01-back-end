require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/router');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3003, () => {
    console.log("Server running on in port 3003🚀")
});