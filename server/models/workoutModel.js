import mongoose from 'mongoose'

const workoutSchema = mongoose.Schema({
    
    title: {
        type:  String,
        required: true,
    },
    load: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;