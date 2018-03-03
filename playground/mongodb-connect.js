const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Umable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops))
  // });

  db.collection('Users').insertOne({
    name: 'Craig Lewis',
    age: 18,
    location: 'The Grave'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops))
  })
  client.close();
});
