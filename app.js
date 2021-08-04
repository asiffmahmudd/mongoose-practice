const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a3ov0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
/* mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});*/

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model('Person', personSchema);

const p1 = new Person({
    name: "asif",
    age: 24
});
p1.save().then(() => console.log('meow'));