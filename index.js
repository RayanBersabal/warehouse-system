const port = process.env.PORT || 5001;
const app = require('./server');

app.listen(port, () => {
    console.log('Listening on port', port);
});