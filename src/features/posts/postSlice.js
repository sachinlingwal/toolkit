import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "learning redux toolkit",
    content: "i have heard good things",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2",
    title: "learning redux toolkit",
    content: "i have heard good things",
    date: sub(new Date(), { minutes: 50 }).toISOString(),
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // postAdded: (state, action) => {
    //   state.push(action.payload);
    // },

    // second way
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(state) {
        return {
          payload: {
            ...state,
            id: nanoid(),
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
