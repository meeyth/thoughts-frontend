import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    likedDetails: {
        totalDocs: null,
        limit: 3,
        page: 1,
        totalPages: null,
        hasNextPage: null, 
        hasPrevPage: null,
        prevPage: null,
        nextPage: null,
        pagingCounter: null
    }
};

const likedDetailsSlice = createSlice({
    name: 'likedDetails',
    initialState,
    reducers: {
        setLikeDetails: (state, action) => {
            state.likedDetails = action.payload;
        },
        updateCurrentPageToNextPage: (state, action) => {
            console.log("action.payload  ",action.payload)
            console.log(action.payload.page, "updateCurrentPageToNextPage");
            state.likedDetails.page = action.payload.page
            
        }
    }
})

export const { setLikeDetails, updateCurrentPageToNextPage } = likedDetailsSlice.actions;

export default likedDetailsSlice.reducer;