import mongoose from "mongoose"


const Connection = async() => {
    const URL = `mongodb+srv://user:user@cluster0.o7dgf1m.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting to the database', error);
    }
}

export default Connection;