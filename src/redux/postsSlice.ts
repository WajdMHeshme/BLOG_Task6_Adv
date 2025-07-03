import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "./postsTypes";

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: []
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    }
  }
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
