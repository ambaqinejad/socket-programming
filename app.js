const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.json({
        name: 'Heroku app'
    })
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})