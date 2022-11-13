import { createSlice } from "@reduxjs/toolkit";
import { rootState } from "app/store";

export interface postListConfig {
  title: string;
  date: string;
  description: string;
  category: string;
  tag: [];
  directory: string;
  imgUrl: string;
}

interface postConfig {
  title: string;
  category: string;
  tagList: [];
  content: string;
  fileList: [];
  postList: postListConfig[];
  postCount: number;
}

const initialState: postConfig = {
  title: "",
  category: "",
  tagList: [],
  content: "",
  fileList: [],

  postList: [],
  postCount: 0,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostTitle: (state, { payload }) => {
      state.title = payload;
    },
    setPostCategory: (state, { payload }) => {
      state.category = payload;
    },
    setPostTagList: (state, { payload }) => {
      state.tagList = payload;
    },
    setPostContent: (state, { payload }) => {
      state.content = payload;
    },
    setPostFileList: (state, { payload }) => {
      state.fileList = payload;
    },
    setPostList: (state, { payload }) => {
      state.postList = payload;
    },
    setPostCount: (state, { payload }) => {
      state.postCount = payload;
    },
  },
});
export const {
  setPostTitle,
  setPostCategory,
  setPostTagList,
  setPostContent,
  setPostFileList,
  setPostList,
  setPostCount,
} = postSlice.actions;

export const selectPostTitle = (state: rootState) => state.posts.title;
export const selectPostCategory = (state: rootState) => state.posts.category;
export const selectPostTagList = (state: rootState) => state.posts.tagList;
export const selectPostContent = (state: rootState) => state.posts.content;
export const selectPostFileList = (state: rootState) => state.posts.fileList;
export const selectPostList = (state: rootState) => state.posts.postList;
export const selectPostCount = (state: rootState) => state.posts.postCount;

export default postSlice.reducer;
