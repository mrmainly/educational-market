import { api, PaginationGeneric, projectDataModel, projectTypeDataModel } from "./typicode";
import { URLS } from "@/constans";

type getProjectParams = {
    page: string | number;
    pageSize: number;
    status?: number;
};

export const project = api.injectEndpoints({
    endpoints: (build) => ({
        getProject: build.query<PaginationGeneric<projectDataModel>, getProjectParams>({
            query: ({ page, pageSize, status }) => ({
                url: URLS.PROJECT_URL,
                params: {
                    page: page,
                    page_size: pageSize,
                    status: status,
                    ordering: "-sort_index",
                    is_active: false,
                },
            }),
            providesTags: ["Project"],
        }),
        getDetailProject: build.query<projectDataModel, { id?: string }>({
            query: ({ id }) => ({
                url: URLS.PROJECT_URL + id + "/",
            }),
            providesTags: ["Project"],
        }),
        getProjectType: build.query<PaginationGeneric<projectTypeDataModel>, undefined>({
            query: () => ({
                url: URLS.PROJECT_TYPE,
                params: {
                    page: 1,
                    page_size: 2,
                    ordering: "-sort_index",
                },
            }),
            providesTags: ["Project"],
        }),
        getTask: build.query({
            query: ({ page, pageSize, id }) => ({
                url: URLS.PROJECT_TASK,
                params: {
                    page: page,
                    page_size: pageSize,
                    project: id,
                },
            }),
        }),
        getImages: build.query({
            query: (id) => ({
                url: URLS.PROJECT_IMAGE,
                params: {
                    page: 1,
                    page_size: 10000,
                    project: id,
                },
            }),
        }),
    }),
});

export const {
    useGetProjectQuery,
    useGetDetailProjectQuery,
    useGetProjectTypeQuery,
    useGetImagesQuery,
    useGetTaskQuery,
} = project;
