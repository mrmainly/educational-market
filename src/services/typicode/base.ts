import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_URL } from "./config";

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    // baseUrl: "https://c662-94-245-129-10.ngrok-free.app/administrator/api/v3/",
    // prepareHeaders: (headers, { getState }) => {
    //     const token = (getState() as RootState).login.token;
    //     if (token) {
    //         headers.set("authorization", `Token ${token}`);
    //     }
    //     return headers;
    // },
});

// const customFetchBase: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
//     args,
//     api,
//     extraOptions
// ) => {
//     await mutex.waitForUnlock();
//     const result = await baseQuery(args, api, extraOptions);

//     if (result.error?.status === 401) {
//         localStorage.removeItem("token");
//         window.location.href = "/login";
//     }

//     return result;
// };

export const api = createApi({
    reducerPath: "splitApi",

    baseQuery: baseQuery,

    tagTypes: ["Project"],

    endpoints: () => ({}),
});
