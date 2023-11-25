const express = require('express');
const app = express();
const port = 8080;




app.get('/', (req, res) => {
    res.send('Hi from express js !');
});

app.listen(port, () => {
    console.log(`Server is running : http://localhost:${port}`);
});