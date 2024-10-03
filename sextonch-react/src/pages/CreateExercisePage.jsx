import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('kgs');
    const [date, setDate] = useState('');

    const navigate = useNavigate()

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date}
        const response = await fetch(
            './exercises', {
                method: "POST",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(newExercise)
            }
        )
        if(response.status == 201){
            alert('Successfully added the Exercise')
        }
        else{
            alert(`Failed to add Exercise, status code = ${response.status}`)
        }
        navigate('/')
    };

    return (
        <div>
            <header>
                <h1>
                    Add Exercise
                </h1>
                <p>
                    Type in selection and hit "add" to add the exercise.
                    Make sure to fill in all the parameters. 
                </p>
            </header>
            <input
                type="String"
                placeholder="name"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                placeholder="reps as number"
                onChange={e => setReps(e.target.valueAsNumber)} />
            <input
                type="number"
                value={weight}
                placeholder="weight as number"
                onChange={e => setWeight(e.target.valueAsNumber)} />
            <select name="unit" value={unit} onChange={e => setUnit(e.target.value)}>
                <option value="kgs">Kgs</option>
                <option value="lbs">Lbs</option>
            </select>
            <input
                type="String"
                value={date}
                placeholder="date in form xx-xx-xx"
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addExercise}
            >Add</button>
            <footer>© 2024 Christopher Sexton</footer>
        </div>
    );
}

export default CreateExercisePage;
