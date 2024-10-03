import * as model from "../model/model.mjs"

await model.connect() // Runs the connect method in model.mjs when imported, connecting to mongoDB

async function postMethod(req, res){
    let name = req.body.name
    let reps = req.body.reps
    let weight = req.body.weight
    let unit = req.body.unit
    let date = req.body.date
    if(
        typeof(name) === 'undefined' || typeof(reps) === 'undefined' ||
        typeof(weight) === 'undefined' || typeof(unit) === 'undefined' ||
        typeof(date) === 'undefined'){
            res.status(400).json({ Error: 'Invalid request'})
        }
    else if(
        typeof(name) !== 'string' || name.length < 1){
            res.status(400).json({ Error: 'Invalid request'})
        }
    else if(
        typeof(reps) !== 'number' || Number.isInteger(reps) !== true || 
        reps < 1){
            res.status(400).json({ Error: 'Invalid request'})
        }
    else if(
        typeof(weight) !== 'number' || Number.isInteger(weight) !== true || 
        weight < 1){
            res.status(400).json({ Error: 'Invalid request'})
        }
    else if(
        typeof(unit) !== 'string' || !(unit === 'kgs' || unit === 'lbs')){
            res.status(400).json({ Error: 'Invalid request'})
        }
    else if(
        typeof(date) !== 'string' || !isDateValid(date)){
            res.status(400).json({ Error: 'Invalid request'})
        }
    else {
        let returnExercise = await model.createExercise(name, reps, weight, unit, date)
        res.status(201).json(returnExercise)
    }
}

async function getAll(req, res){
    let returnUsers = await model.findAll()
    res.status(200).json(returnUsers)
}

async function getMethodId(req, res){
    let query = {}
    let returnOrder = null
    query['_id'] = req.params.id
    returnOrder = await model.findExercise(query)
    if (returnOrder.length < 1){
        res.status(404).json({"Error": "Not found"})
    }
    else{
        res.status(200).json(returnOrder[0])
    }
}

async function putMethodId(req, res){
    let name = req.body.name
    let reps = req.body.reps
    let weight = req.body.weight
    let unit = req.body.unit
    let date = req.body.date
    if(
        typeof(name) === 'undefined' || typeof(reps) === 'undefined' ||
        typeof(weight) === 'undefined' || typeof(unit) === 'undefined' ||
        typeof(date) === 'undefined'){
            res.status(400).json({ Error: 'Invalid request'})
        }
    else if(
        typeof(name) !== 'string' || name.length < 1){
            res.status(400).json({ Error: 'Invalid request'})
        }
    else if(
        typeof(reps) !== 'number' || Number.isInteger(reps) !== true || 
        reps < 1){
            res.status(400).json({ Error: 'Invalid request'})
        }
    else if(
        typeof(weight) !== 'number' || Number.isInteger(weight) !== true || 
        weight < 1){
            res.status(400).json({ Error: 'Invalid request'})
        }
    else if(
        typeof(unit) !== 'string' || !(unit === 'kgs' || unit === 'lbs')){
            res.status(400).json({ Error: 'Invalid request'})
        }
    else if(
        typeof(date) !== 'string' || !isDateValid(date)){
            res.status(400).json({ Error: 'Invalid request'})
        }
    else {
        let query = {}
        let returnExercise = null
        query['_id'] = req.params.id
        returnExercise = await model.findExercise(query)
        if (returnExercise.length < 1){
            res.status(404).json({ "Error": "Not found"})
        }
        else{
            query = {}
            query['name'] = String(req.body.name)
            query['reps'] = Number(req.body.reps)
            query['weight'] = Number(req.body.weight)
            query['unit'] = String(req.body.unit)
            query['date'] = String(req.body.date)
            returnExercise = await model.replaceExercise(req.params.id, query)
            res.status(200).json(returnExercise[0])
        }
    }
}

async function deleteMethodId(req, res){
    let query = {}
    let returnExercise = null
    query['_id'] = req.params.id
    returnExercise = await model.findExercise(query)
    if (returnExercise.length < 1){
        res.status(404).json({ "Error": "Not found"})
    }
    else{
        await model.deleteUserById(query)
        res.status(204).json()
    }
}

/**
*
* @param {string} date
* Return true if the date format is MM-DD-YY where MM, DD and YY are 2 digit integers
*/
function isDateValid(date) {
    // Test using a regular expression. 
    // To learn about regular expressions see Chapter 6 of the text book
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}

export { postMethod, getAll, getMethodId, putMethodId, deleteMethodId }
