import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import {useState} from 'react'
import Navigation from './components/Navigation'

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState()

  return (
    <div className="app">
        <Router>
        <Navigation/> {/*Responsible for the user interface*/}
          <Routes>
            <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit}/>} ></Route>
            <Route path="/create-exercise" element={ <CreateExercisePage />}></Route>
            <Route path="/edit-exercise" element={ <EditExercisePage exerciseToEdit={exerciseToEdit}/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
