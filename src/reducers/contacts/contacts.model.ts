import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    contactsData: any;
} = {
    contactsData: undefined,
};

export const contactsModel = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        setContactsData: (state, { payload }) => {
            state.contactsData = payload;
        },
    },
});

export const { setContactsData } = contactsModel.actions;

export const reducer = contactsModel.reducer;
