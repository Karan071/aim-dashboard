import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (userId: string) => {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }
        return response.json();
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {}
})

export default userSlice.reducer;