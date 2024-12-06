import { configureStore } from "@reduxjs/toolkit";

import { api } from "@/services/typicode";
import { contactsModel, projectModel } from "@/reducers";

export const store = configureStore({
    reducer: {
        contacts: contactsModel.reducer,
        project: projectModel.reducer,

        //api
        [api.reducerPath]: api.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api.middleware]),
});
