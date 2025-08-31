import mongoose from "mongoose"

const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log('CONNECTED TO DATABASE');

    } catch (e) {
        console.error('failed to connect to db' + e);
    }
}

export default connectDB;