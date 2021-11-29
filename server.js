const express = require('express');
const cors = require('cors')
const app = express();
const Router = require('./routes/index');

app.use(cors())
app.use(express.json())
app.use('/api', Router)
app.get("/", (req, res) => {
    return res.status(200).json({
      status: "success",
      message: "welcome to Warehouse System",
    });
  });
app.get('*', (req, res) => {
    res.status(404).json({
        status: "failed",
        message: "Not Found"
    })
})
module.exports = app 