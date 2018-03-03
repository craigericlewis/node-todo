const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   // console.log(JSON.stringify(count, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name:'Craig Lewis'}).toArray().then((docs) => {
    console.log ('Users: ');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  })

   client.close();
});
