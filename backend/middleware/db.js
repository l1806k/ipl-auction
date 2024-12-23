const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

console.log('MONGOURI:', process.env.MONGOURI);

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;