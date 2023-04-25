require('dotenv').config()
const express = require("express");
const cors = require("cors");
const router = require('./router/index')
const PORT = process.env.PORT || 5001

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.use('/api', router)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}
start()