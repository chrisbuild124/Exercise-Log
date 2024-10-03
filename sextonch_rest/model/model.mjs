import mongoose from 'mongoose'
import 'dotenv/config'

let connection = undefined;
const THE_DB_NAME = 'Cluster0';
const THE_COLLECTION = 'exercises';
const THE_MODEL_CLASS_NAME = 'Exercise';
let Exercise = undefined;

async function connect(dropCollection){
    try{
        connection = await createConnection();
        console.log("Successfully connected to MongoDB using Mongoose!")
        if(dropCollection){ // Removes the collection if already there
            await connection.db.dropCollection(THE_COLLECTION)
        }
        Exercise = createSchema() // Model class
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

async function createConnection(){
    await mongoose.connect(process.env.MONGODB_CONNECT_STRING, 
                {dbName: THE_DB_NAME}) // This overwrites the connection string 
    return mongoose.connection;
}

function createSchema(){
    const newExercise = mongoose.Schema({
        name: {type: String, required: true},
        reps: {type: Number, required: true},
        weight: {type: Number, required: true},
        unit: {type: String, required: true},
        date: {type: String, required: true},
    })
    return mongoose.model(THE_MODEL_CLASS_NAME, newExercise)
}

async function createExercise(name, reps, weight, unit, date){
    const exercise = new Exercise({name, reps, weight, unit, date})
    return exercise.save()
}

const findAll = async () =>{
    const query = Exercise.find({})
    return query.exec()
}

const findExercise = async (filter) =>{
    const query = Exercise.find(filter)
    return query.exec()
}

const replaceExercise = async (_id, filter) =>{
    await Exercise.updateOne({_id: _id}, filter)
    let modifiedExercise = await findExercise({_id: _id})
    return modifiedExercise
}

const deleteUserById = async (query) =>{
    await Exercise.deleteOne(query)
}

export {connect, createExercise, findAll, findExercise, replaceExercise, deleteUserById }
