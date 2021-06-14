const express = require('express');
const { registerPartials } = require('hbs');
const hbs = require('hbs');
const app = express();
const path = require('path');


//public static path
const partial_path = path.join(__dirname, ".partial")
const template_path = path.join(__dirname, "../templates/views");
const staticPath = path.join(__dirname, "../public");

hbs.registerPartials(partial_path);
app.set('view engine', 'hbs');
app.set("views", template_path);

app.use(express.static(staticPath));
//Routing
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/weather', (req, res) => {
    res.render('weather')
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('*', (req, res) => {
    res.render('error404.hbs')
});


app.listen(8001, "127.0.0.1", (req, res) => {
    console.log("server is running at port no 8001....")
});