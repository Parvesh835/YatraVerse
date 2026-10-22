const express = require('express');
const app = express();

// configring dotenv
const dotenv = require('dotenv')
dotenv.config();


// Connecting database
const ConnectDb = require('./config/db');
ConnectDb();

const UserRouter = require('./routers/user.route')

PORT = process.env.PORT || 8888

app.use(express.json());

app.use('/auth', UserRouter)

app.listen(PORT, () => {
    console.log(`Server is running on the PORT: ${PORT}`);
});