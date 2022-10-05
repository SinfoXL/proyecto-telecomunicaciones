
const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

require("dotenv").config();

const PORT = process.env.PORT || 3001 ; 
const PATH_ROUTES = './src/routes'; //important!! don't change this path or filenames inside de direname !

const arrayPathRoutes = fs.readdirSync(PATH_ROUTES)

//middleware
app.use(cors())
app.use(express.json());

//routes
arrayPathRoutes.forEach(pathRoute => {
    app.use('/api/v1',require(`./routes/${pathRoute}`));
});

app.listen(PORT, ()=>{console.log(`App runing on port : ${PORT}`)});