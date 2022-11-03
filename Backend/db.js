const mongoose = require('mongoose');

const DBURI = 'mongodb+srv://jonnyp:123456pass@cluster1.77vr4hy.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err))