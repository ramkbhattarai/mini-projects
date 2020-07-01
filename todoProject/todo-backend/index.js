const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


const MongoClient = require('mongodb').MongoClient
let db;
MongoClient.connect('mongodb://localhost:27017/todos',{useUnifiedTopology: true}, async function (err, client) {
    if (err) throw err

     db = client.db('todos')
    await db.collection('todos').deleteMany();
    await db.collection('todos').insertMany([
        {done: true, description: 'write code'},
        { done: true, description: 'fix bugs' },
        { done: false, description: 'profit' }
    ]);
})
app.get('/',(req, res)=>{
    res.json('did this work');
});

app.get('/todos', async (req, res) => {
    const todos = await db.collection('todos').find().toArray();
    res.json(todos);
});
app.listen(3001,()=>{
    console.log('please work');
});