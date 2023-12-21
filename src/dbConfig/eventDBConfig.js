import mongoose from 'mongoose';

mongoose.set('strictQuery', false)
const connectEventDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_EVENT_URI)
        console.log('Event MongoDB Connected');
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

export default connectEventDB