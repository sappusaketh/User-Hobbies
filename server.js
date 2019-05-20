const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');
const connectDB = require('./models/db');
const PORT = process.env.PORT || 5000;

// DB connection
connectDB();

app.use(
  fileUpload({
    limits: { fileSize: 1 * 1024 * 1024 },
    createParentPath: true
  })
);

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'uploads')));
app.use(express.json({ extended: true })); //for jsondata bodyparsing
app.use(express.urlencoded({ extended: true })); // for x-www-form-urlencoded bodyparsing
app.use('/user', require('./routes/api'));

app.get('/', (req, res) => {
  res.send(`Hello listenting to port ${PORT}`);
});
app.listen(PORT, () => console.log(`listenting to port ${PORT}.....`));
