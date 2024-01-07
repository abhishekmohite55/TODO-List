import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () =>{

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todo-list.fhpbfc5.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI)

    mongoose.connection.on('connected', () =>{
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Database is Disconnected")
    })

    mongoose.connection.on('error', (err) => {
        console.log("There is an error in Database", err.message);
    })
}

export default Connection;