const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var cors = require('cors')
const server = require('./backend/Controller/user')
const app = express()
const config = require('./backend/Config/db_config')




app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mongodb.MongoClient.connect(config.MongoURI, function(err, database) {
//   // open another database over the same connection
//   var database2 = database.db(DATABASE_NAME);

//   // now you can use both `database` and `database2`
// });

// mongoose
//   .connect(
//     config.MongoURI
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.log(err))

async function myDbConnection() {

  const url = config.MongoURI;

  try {
      await mongoose.connect(url, { useNewUrlParser: true });
      console.log('Connected Successfully')
      // Here from above url you've already got connected to test DB,
        //  So let's make a switch as needed.
      mongoose.connection.useDb('Minor'); // Switching happens here..
      /**
       * Do some DB transaction with mongoose models as by now models has already been registered to created DB connection
       */
  } catch (error) {
      console.log('Error connecting to DB ::', error);
  }
}
var port = process.env.PORT || 3001

app.use('/', server)

myDbConnection();

app.listen(port)
console.log('App is running on port ' + port)
