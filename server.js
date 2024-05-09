const express = require('express')
const app = express();
const mongoose = require('mongoose');
const routerurl = require('./routes/routes');
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.use("/app", routerurl);
if (mongoose.connect('mongodb+srv://prathee373:muruga373@cluster0.gyujjxq.mongodb.net/user-db?retryWrites=true&w=majority&appName=Cluster0')) {
    console.log('database is connected');
}

app.listen(4000, () => {
    console.log("server is connected");
})