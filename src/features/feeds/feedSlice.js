import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    feedDetails: {
        totalDocs: null,
        limit: 3,
        page: 1,
        totalPages: null,
        hasNextPage: null, // Keep track of next page
        hasPrevPage: null,
        prevPage: null,
        nextPage: null,
        pagingCounter: null
    }
};

const feedDetailsSlice = createSlice({
    name: 'feedfeedDetails',
    initialState,
    reducers: {
        setFeedDetails: (state, action) => {
            state.feedDetails = action.payload;
        },
        updateCurrentPageToNextPage: (state, action) => {
            console.log(action.payload.page, "updateCurrentPageToNextPage");
            state.feedDetails.page = action.payload.page
        }
    },
});

export const { setFeedDetails, updateCurrentPageToNextPage } = feedDetailsSlice.actions;

export default feedDetailsSlice.reducer;
