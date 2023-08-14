require('dotenv').config();
const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const listsRoutes = require('./routes/lists');
const userRoutes = require('./routes/user');
const itemRoutes = require('./routes/items');

const app = express();
app.use(cors());

//middleware
app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes
app.use('/api/lists', listsRoutes);
app.use('/api/user', userRoutes);
app.use('/api/items', itemRoutes);

//connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log('Connected to DB and Listening on port:', process.env.PORT);
		});
	})
	.catch((error) => {
		console.log(error);
	});
