//Connect to MongoDB
const mongoose = require('mongoose')

// direccion con acceso a la base de datos de MongoDB 
mongoose.connect('mongodb+srv://jonnyp:123456pass@cluster1.77vr4hy.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err))