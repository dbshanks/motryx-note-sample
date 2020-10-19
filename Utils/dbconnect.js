import mongoose from 'mongoose';

const dbConnect = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('connected to mongo');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Error connecting', err);
  });
};

export default dbConnect;
