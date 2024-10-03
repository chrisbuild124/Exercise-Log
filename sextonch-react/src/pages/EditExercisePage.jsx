import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export const EditExercisePage = ({exerciseToEdit}) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const navigate = useNavigate()

    const editExercise = async () => {
        const editExercise = {name, reps, weight, unit, date}
        const response = await fetch(
            `./exercises/${exerciseToEdit._id}`, {
                method: "PUT",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(editExercise)
            }
        )
        if(response.status == 200){
            alert('Successfully editted the Exercise')
        }
        else{
            alert(`Failed to edit Exercise, status code = ${response.status}`)
        }
        navigate('/')
    };

    return (
        <div>
            <header>
                <h1>
                    Edit Exercise
                </h1>
                <p>
                    Type in selection and hit "edit" to change the exercise
                </p>
            </header>
            <input
                type="String"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                onChange={e => setReps(e.target.valueAsNumber)} />
            <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.valueAsNumber)} />
            <select value={unit} name="unit" onChange={e => setUnit(e.target.value)}>
                <option value="kgs">Kgs</option>
                <option value="lbs">Lbs</option>
            </select>
            <input
                type="String"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={editExercise}
            >Edit</button>
            <footer>© 2024 Christopher Sexton</footer>
        </div>
    );
}

export default EditExercisePage;
