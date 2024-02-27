import {createSlice, PayloadAction} from '@reduxjs/toolkit';
const initialState: any =[
    {
        id:"1",
        title: "Post 1",
        description: "Description 1"
    }
];
const postesSLice = createSlice ({
    name: "posts",
    initialState,
    reducers: {
        addPost : (state, action: PayloadAction<any>) =>{
            const {id, title, description }= action.payload;
            state.push({id, title, description});
        },
        deletePost: (state, action: PayloadAction<any>) =>{
            const postId = action.payload;
            return state.filter((post: any)=> post.id !== postId)
        }
    }
})
export const {addPost, deletePost}= postesSLice.actions;
export default postesSLice.reducer;