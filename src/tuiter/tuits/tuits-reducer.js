import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.png",
  "title": "1000s of Martian colonists being building Mars Base 1, 100s of SpaceX Starships land on Mars after a 6 month journey.",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": true,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    deleteTuit(state, action) {
      const index = state.findIndex(tuit => tuit._id === action.payload);
      state.splice(index, 1);
    },
    countLike(state, action) {
      const index = state.findIndex(tuit => tuit._id === action.payload);
      if(state[index].liked) state[index].likes++;
      else state[index].likes--;
      state[index].liked = !state[index].liked;
    },
  }

});

export const {createTuit, deleteTuit, countLike} = tuitsSlice.actions;
export default tuitsSlice.reducer;
