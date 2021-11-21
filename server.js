const express = require('express');
const app = express();
const Router = require('./routes/index');
const port = process.env.PORT || 5001;
app.use(express.json())
app.use('/api', Router)
// app.get('/', (req, res) => {
//     res.json({ 
//         message: "Welcome to inventory management application.",
//         "instruction": "type products after localhost"
//     });
// })
app.get('*', (req, res) => {
    res.status(404).json({
        status: "failed",
        message: "Not Found"
    })
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})