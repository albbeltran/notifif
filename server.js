const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const router = require('./router');

const app = express();
const port = process.env.PORT;

// middleware

app.use(express.json());             // for application/json
app.use(express.urlencoded());       // for application/x-www-form-urlencoded

// cors
app.use(cors());

// router
app.use('/', router);

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})