const express = require('express');
const app = express();
const cors = require('cors')
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
const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log('Listening on port', port);
});