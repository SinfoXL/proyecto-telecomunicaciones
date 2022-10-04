
const express = require("express");
const app = express();
const fs = require("fs");

require("dotenv").config();

const PORT = process.env.PORT || 3001 ; 
const PATH_ROUTES = './src/routes'; //important!! don't change this path or filenames inside de direname !

const arrayPathRoutes = fs.readdirSync(PATH_ROUTES)

//middleware
app.use(express.json());

//routes
arrayPathRoutes.forEach(pathRoute => {
    app.use('/api/v1',require(`./routes/${pathRoute}`));
});

app.listen(PORT, ()=>{console.log(`App runing on port : ${PORT}`)});