import { projectDTO } from "@/mocks";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    basketList: { count: number; projectId: number }[];
} = {
    basketList: [],
};

export const projectModel = createSlice({
    name: "project",
    initialState,
    reducers: {
        setBasketList: (state, { payload }) => {
            state.basketList = payload;
        },
    },
});

export const { setBasketList } = projectModel.actions;

export const reducer = projectModel.reducer;
