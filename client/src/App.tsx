import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from '../node_modules/axios/index'

function App() {
  const [text, setText] = useState('');
  const [workout, setWorkout] = useState([]);

  const sendForText = () => {
    axios.get('http://localhost:2000/api')
    .then(response => {
      const { data } = response;
      setText(data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const sendForWorkout = () => {
    axios.post('http://localhost:2000/api/workout', {
      bodyPart: 'legs'
    })
    .then(response => {
      const { data } = response;
      setWorkout(data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => sendForText()}>
          <p>{text}</p>
        </button>

        <button onClick={() => sendForWorkout()}>
          <p>Send for Workout</p>
        </button>
        {
          workout.forEach(exercise => {
            return <p>{exercise.name}</p>
          })
        }
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
