import mongoose from 'mongoose'

const workoutSchema = mongoose.schema({
    
    title: {
        type: string,
        required: true,
    },
    load: {
        type: string,
        required: true,
    },
    reps: {
        type: string,
        required: true,
    }
}, {
    timestamps: true
})

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;