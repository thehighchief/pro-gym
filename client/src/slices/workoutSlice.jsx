import { apiSlice } from "./ApiSlice";

export const workoutSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAllWorkout: builder.query({
            query: () => ({
                url: '/api/workouts',
            }),
            providesTags: ['Workout'],
            keepUnusedDataFor: 5
        }),

        postWorkout: builder.mutation({
            query: (workout) => ({
                url: '/api/workouts',
                method: 'POST',
                body: workout,
                headers: {"Content-type": "application/json"}
            }),
            invalidatesTags: ['Workout']
        }),


        deleteWorkout: builder.mutation({
            query: (id) => ({
                url: '/api/workouts/' + id,
                method: 'DELETE'
            }),
            invalidatesTags: ['Workout']
        })
    })
});

export const { 
    useGetAllWorkoutQuery, 
    usePostWorkoutMutation, 
    useDeleteWorkoutMutation 
} = workoutSlice