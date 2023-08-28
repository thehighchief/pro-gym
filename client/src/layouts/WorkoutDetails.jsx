import { formatDistanceToNow } from 'date-fns'
import { useDeleteWorkoutMutation } from '../slices/workoutSlice'

const WorkoutDetails = ({workout: { title, load, reps, createdAt, _id }}) => {

  const [ deleteWorkout ] = useDeleteWorkoutMutation()

  const handleDelete = async () => {
    await deleteWorkout(_id)
  }

  return (

    <div className="workoutdetails">

        <div className="workoutdetails-sub">
            <h2>Title: {title}</h2>
            <p>Load(kg): {load}</p>
            <p>Number of Reps: {reps}</p>
            <span>{formatDistanceToNow(new Date(createdAt), {addSuffix: true})}</span>
        </div>

        <div className="workout-delete material-symbols-outlined" onClick={handleDelete}>
            delete
        </div>

    </div>


  )
}

export default WorkoutDetails