import { api } from "./typicode";
import { URLS } from "@/constans";

export const documents = api.injectEndpoints({
    endpoints: (build) => ({
        getDocuments: build.query({
            query: ({ page, pageSize, is_main }) => ({
                url: URLS.DOCUMENTS,
                params: {
                    page: page,
                    page_size: pageSize,
                    is_main: is_main,
                },
            }),
        }),
    }),
});

export const { useGetDocumentsQuery } = documents;
