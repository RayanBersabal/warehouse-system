const express = require('express');
const app = express();
const Router = require('./routes/index');
const port = process.env.PORT || 5001;
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
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})