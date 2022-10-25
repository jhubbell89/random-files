// Require modules
const express = require('express');
const path = require('path');

//require the parts "database"
const partsDb = require('./data/car-partsDb.js')

// Create the Express app
const app = express();
  
// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Mount middleware (app.use)
  
  
// Mount routes
app.get('/', function (req, res) {
    res.send('<h1>I love Trucks!</h1>');
});
  
app.get('/', function(req, res) {
    res.redirect('/home');
});

app.get('/partsDb', function(req, res) {
    res.render('carparts/index', {
        partsDb: car-partsDb.getAll()
    })
})
// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
