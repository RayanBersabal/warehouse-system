const port = process.env.PORT || 5001;
const app = require('./server');

app.listen(port, () => {
    console.log(`listening on ${port}`);
});