import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authConfig {
  accessToken: string;
  githubId: string;
  githubImage: string;
  login: boolean;
  authFile: boolean;
  blogType: null | 0 | 1; // 0:직접 레이아웃 설정, 1: 게시글만 관리
}

interface loginConfig {
  accessToken: string;
  githubId: string;
  githubImage: string;
}

interface blogTypeConfig {
  blogType: null | 0 | 1;
}

interface authFileConfig {
  authFile: boolean;
}

const initialState: authConfig = {
  accessToken: "",
  githubId: "",
  githubImage: "",
  login: false,
  authFile: false,
  blogType: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<loginConfig>) => {
      state.accessToken = action.payload.accessToken;
      state.githubId = action.payload.githubId;
      state.githubImage = action.payload.githubImage;
      state.login = true;
    },
    logout: (state) => {
      state.githubId = "";
      state.accessToken = "";
      state.githubImage = "";
      state.login = false;
      state.authFile = false;
      state.blogType = null;
    },
    authFile: (state, action: PayloadAction<authFileConfig>) => {
      state.authFile = action.payload.authFile;
    },
    blogType: (state, action: PayloadAction<blogTypeConfig>) => {
      state.blogType = action.payload.blogType;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
