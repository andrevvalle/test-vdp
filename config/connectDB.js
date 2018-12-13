require('dotenv').config({ path: './.env' });
import mongoose from 'mongoose';

export default mongoose.connect(
    `mongodb://${process.env.mongoUser}:${process.env.mongoPass}@ds155097.mlab.com:55097/blog-vdp`,
    { useNewUrlParser: true }
);