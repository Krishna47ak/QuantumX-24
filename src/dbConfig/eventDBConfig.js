import mongoose from 'mongoose';

mongoose.set('strictQuery', false)
const connectEventDB = async () => {
    try {
        const eventConnection = await mongoose.connect(process.env.MONGO_EVENT_URI)
        console.log('Event MongoDB Connected');
        return eventConnection
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

export default connectEventDB