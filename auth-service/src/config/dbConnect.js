const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2');


mongoose.plugin(mongooseDelete, { overrideMethods: 'all' });
mongoose.plugin(mongoosePaginate);
mongoose.plugin(mongooseAggregatePaginate);

const dbConnect = () => {
  console.log('lol');
  
  // const uri = `mongodb://${DB_URL}/${DB_NAME}${
  //   DB_RS ? `?replicaSet=${DB_RS}` : ''
  // }`;
  // const uri = `mongodb://${DB_URL}/${DB_NAME}`;
  const uri = process.env.MONGODB_URL;
  console.log(uri);
  const options = {
    // user: DB_USER,
    // pass: DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  };
  mongoose.connect(uri, options);
  mongoose.set('debug', process.env.DB_DEBUG);
  mongoose.connection.on(
    'error',
    console.error.bind(console, 'connection error:')
  );
  mongoose.connection.once('open', () => {
    console.log('connected');   
     // connected uri
    console.log('connected uri', uri);
  });
}

module.exports = { dbConnect };
