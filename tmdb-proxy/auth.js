const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const authRouter = require('../server/tmdb-proxy/authRouter')

const app = express();

app.use(express.json())
app.use("/auth",authRouter)

const start = async () => {
    try{
        await mongoose.connect(`mongodb+srv://<levkaflower>:<228red228>@cluster0.uiitu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))
    }
    catch(e){
        console.log(e);
    }
}

start()