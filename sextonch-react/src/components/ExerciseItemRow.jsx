import '../App.css';
import { MdDeleteForever } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function ExerciseItemRow({ exercise, onDelete, onEdit}) {
 
    return (
        (
            <tr>
                <td>{exercise.name}</td>
                <td>{exercise.reps}</td>
                <td>{exercise.weight}</td>
                <td>{exercise.unit}</td>
                <td>{exercise.date}</td>
                <td>
                    <div className="collection-item">
                        <Link to="/edit-exercise" onClick={() => onEdit(exercise)}><MdModeEdit /></Link>&nbsp;
                    </div>
                </td>
                <td>
                    <div className="collection-item" onClick={() => onDelete(exercise._id)}>
                        <MdDeleteForever />&nbsp;
                    </div>
                </td>
            </tr>
         )
    );
}

export default ExerciseItemRow;
