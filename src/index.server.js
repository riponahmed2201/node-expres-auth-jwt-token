const express = require('express');
const env = require('dotenv');
const app = express();

const bodyparser = require('body-parser');
const mongoose = require('mongoose');


//routes
const userRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');

//environment variable or you can say constants
env.config();


// mngodb connection
//mongodb+srv://root:<password>@cluster0.gu3az.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.gu3az.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex:true
    }
).then(() =>{
    console.log('Database connected');
});

// app.use(express.json());

app.use(bodyparser());
app.use('/api',userRoutes);
app.use('/api',adminRoutes);




//testing route
// app.get('/', (req, res, next) =>{
//     res.status(200).json({
//         message:'hello from server'
//     });
// });

// app.post('/data', (req, res, next) =>{
//     res.status(200).json({
//         message:req.body
//     });
// });



app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
});