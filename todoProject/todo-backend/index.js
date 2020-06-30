const express = require('express');
const app = express();


const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/todos',{useUnifiedTopology: true}, function (err, client) {
    if (err) throw err

    const db = client.db('todos')
})
app.get('/',(req, res)=>{
    res.json('did this work');
});

app.get('/todos', (req, res) => {
    const todos = await db.collection('todos').find().toArray();
    res.json(todos);
});
app.listen(3001,()=>{
    console.log('please work');
});