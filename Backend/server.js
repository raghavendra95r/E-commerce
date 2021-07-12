const express= require('express');
const app = express();
const mongoose= require('mongoose');


//routes
const products= require('./routes/product');
const dotenv = require('dotenv');

//setting env file
dotenv.config({path : '../Backend/config/config.env' });

//connecting to database
mongoose.connect(`mongodb+srv://ecom:${process.env.MONGO_DB_PASSWORD}@cluster0.kvehz.mongodb.net/ecommerce?retryWrites=true&w=majority`,
                {   useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex:true
                }).then(() => {console.log("Database is connected")});




//middleWare
app.use(express.json());
app.use('/api/v1',products);


app.listen(process.env.PORT , () =>{
    console.log(`server is connected to PORT: ${process.env.PORT}`);
})