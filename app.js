const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const Photo = require('./models/Photo');

const app = express();

//Connect db
mongoose.connect('mongodb://localhost/pcat-test-db');

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/', async (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
    const photos = await Photo.find({})
    res.render('index',{
        photos
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/photos', async (req, res) => {
    await Photo.create(req.body);
    res.redirect('/');
});

const port = 3000;
app.listen(3000, () => {
    console.log('server is up');
});
