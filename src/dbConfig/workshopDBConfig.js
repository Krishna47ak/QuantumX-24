import mongoose from 'mongoose';

mongoose.set('strictQuery', false)
const connectWorkshopDB = async () => {
    try {
        const workshopConnection = await mongoose.connect(process.env.MONGO_WORKSHOP_URI)
        console.log('Workshop MongoDB Connected');
        return workshopConnection
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

export default connectWorkshopDB