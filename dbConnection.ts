import mongoose from "mongoose";

const connectToDb = (uri: string) => {
    mongoose.connect(uri)
    .then(() => console.log('DB connected...'));
}

export default connectToDb;