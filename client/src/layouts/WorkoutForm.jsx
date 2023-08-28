import { useState } from "react"
import { usePostWorkoutMutation } from "../slices/workoutSlice"

const WorkoutForm = () => {

  const [postWorkout, isFetching ] = usePostWorkoutMutation();

  const [ title, setTitle] = useState('');
  const [ load, setLoad] = useState('');
  const [ reps, setReps] = useState('');
  const [ error, setError] = useState(null);
  const [ emptyFields, setEmptyFields ] = useState([])


  const onSubmit = async (e) => {

    e.preventDefault();
      const formData = { title, load, reps };
     
  
      await postWorkout(formData)
      .unwrap()
      .then(() => {
        setTitle('')
        setLoad('')
        setReps('')
        setError(null)
        setEmptyFields([])
        
      })
      .catch((error) => {
        setError(error)
        setEmptyFields(emptyFields)
      })
    }



  return (
    <div className="workoutform">

        <h2>Add New Workout</h2>

        <form onSubmit={onSubmit}>

            <label>Title</label>
            <input 
            type="text" 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)}
            className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Load</label>
            <input 
            type="number" 
            value={load} 
            onChange={(e)=>setLoad(e.target.value)}
            className={ emptyFields.includes('load') ? 'emptyfields-error' : ''}
            />


            <label>Reps</label>
            <input 
            type="number" 
            value={reps} 
            onChange={(e)=>setReps(e.target.value)}
            className={emptyFields.includes('reps') ? 'emptyfields-error' : ''}
            />

            <button >Add Workout</button>

            {error && <div className='error-error' >{error?.data?.error || error.error}</div>}
        </form>
        

    </div>
  )
}

export default WorkoutForm