const mongoose = require('mongoose');

const URI =
  'mongodb+srv://admin:admin@123@cluster0-esari.mongodb.net/test?retryWrites=true';

const connectDB = async () => {
  try {
    await mongoose.connect(URI, { useNewUrlParser: true });
    console.log('connected to mongoDB');
  } catch (error) {
    console.error(error.message);
    // exit Process incase a failure
    process.exit(1);
  }
};

module.exports = connectDB;
