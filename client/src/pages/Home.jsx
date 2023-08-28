import WorkoutForm from "../layouts/WorkoutForm"
import WorkoutDetails from "../layouts/WorkoutDetails"
import { useGetAllWorkoutQuery } from "../slices/workoutSlice" 
import loader from '../assets/loader.svg'

const Home = () => {

    const {data: workouts, isLoading, error} = useGetAllWorkoutQuery();

  return (
    
        <div className="home">

            <div className="home-left">
                { isLoading ? (
                    <img className="loader" src={loader} alt="loading" />
                ) : error ? (
                    <div>{error?.data?.error || error.error}</div>
                ) : (
                    workouts && workouts.map((workout) => (
                        <WorkoutDetails workout={workout} key={workout._id}/>
                    ))
                )}
                
            </div>

            <div className="home-right">
                <WorkoutForm />
            </div>

        </div>
    
    
  )
}

export default Home