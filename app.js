const express = require('express');
const app = express();

// Set engine ejs
app.set('view engine', 'ejs');

// Server PORT Define
const PORT = 3000;

// Set Public path
const path = require("path");
const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));

// Set View engine path
const viewsPath = path.join(__dirname,'./templates/views'); 
app.set('views', viewsPath);

// End Point test for
// Send response to web brouser from Node server: localhost:3000/test
app.get('/test', (req, res) => { 
    res.send('<h1>Hello express Server Response !!!</h1>');
});

// End Point for
// Send index.html response to brouser from Node server: localhost:3000
app.get('', (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`);
});