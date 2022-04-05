import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "0", name: "sachin" },
  { id: "2", name: "sachinLingwal" },
  { id: "3", name: "Lingwal" },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
