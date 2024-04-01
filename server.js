const app_folder = "./";

//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: app_folder});
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);