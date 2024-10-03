import ExerciseItemRow from './ExerciseItemRow';

function ExerciseCollection({ exercises, onDelete, onEdit}) {
    return (
        <div className="collection-container">
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>reps</th>
                        <th>weight</th>
                        <th>unit</th>
                        <th>date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
            <tbody>
                {exercises.map((exercise, i) => <ExerciseItemRow exercise={exercise} 
                        onDelete={onDelete} onEdit={onEdit} key={i} />)}
            </tbody>
            </table>
        </div>
    );
}

export default ExerciseCollection;
