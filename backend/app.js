const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const feedbackRoute = require('./routes/feedback.routes');

mongoose.connect(
    "mongodb+srv://jarlab:gl3alnVHUEenK7pT@cluster0.ffdb2.mongodb.net/event?retryWrites=true&w=majority",
    {
        userNewUrlParser : true,
        useUnifiedTopology: true
    }
)
.then(()=>console.log('Connectttion to databse successfufll'))
.catch((err)=>console.log(err));

app.use(cors());
app.use(express.json());
app.use('/api/feedback',feedbackRoute);

const PORT = 3000;
app.listen(PORT,console.log(`Server started at port : ${PORT}`))