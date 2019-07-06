var bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/user');


const db = 'mongodb+srv://kundor:igwt@cluster0-gl0t6.mongodb.net/test?retryWrites=true&w=majority'
app.use(bodyParser.urlencoded({extended: false }));

mongoose
    .connect(db, {})
    .then(() => console.log('db Connected'))
    .catch(err => console.log(err));

// Body parser middleware
app.use(express.urlencoded());    

/* GET home page. */
app.get('/', (req, res) => res.json({
	msg: "Hello! Amingo"
}));

app.post('/users', (req, res) => {
	const newUser = new User({
	    name: req.body.name,
	    email: req.body.email,
	    password: req.body.password
	});

	newUser
	    .save()
	    .then(user => res.json(user))
	    .catch(err => res.json(err));
});

app.get('/users', (reg, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => HTMLFormControlsCollection.log(err))
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));