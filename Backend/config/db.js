const mongoose = require('mongoose');

const ConnectDb = async () => {
    if (!process.env.Mongo_URL) {
        console.warn('Mongo_URL is not defined. Skipping database connection.');
        return false;
    }

    try {
        const connect = await mongoose.connect(process.env.Mongo_URL);

        if (!connect) {
            console.log('MongoDb connection failed');
            return false;
        }

        console.log('MongoDb connected Successfully');
        return true;
    } catch (error) {
        console.error('MongoDb connection failed:', error.message);
        return false;
    }
};

module.exports = ConnectDb