import Workout from '../models/workoutModel.js';
import mongoose from 'mongoose';



// get  all workout

const getWorkouts = async( req, res) => {

    // the -1 is passed so the last created workout will be fetched first
    const workout = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workout)
};


// Get a single workout

const getWorkout = async( req, res ) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'workout not found'})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        res.status(400).json({error: 'workout not found'})
    }

    res.status(200).json(workout)
};


// Create new workout

const createWorkout = async( req, res ) => {
    const { title, load, reps } = req.body

    let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!load) {
    emptyFields.push('load')
  }
  if (!reps) {
    emptyFields.push('reps')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: 'workout could not create'})
    }
};


// Update workout

const updateWorkout = async( req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'workout not found'})
    }

    const workout = await Workout.findOneAndUpdate({ _id: id}, {
        ...req.body
    })

    if(!workout) {
        return res.status(404).json({error: 'couldnt update workout'})
    }

    res.status(200).json(workout)
};



// Delete workout

const deleteWorkout = async( req, res ) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'workout not found'})
    }

    const workout = await Workout.findByIdAndDelete({ _id: id })

    if(!workout) {
        return res.status(404).json({error: 'workout does not exist'})
    }

    res.status(200).json(workout)
};


export {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
};