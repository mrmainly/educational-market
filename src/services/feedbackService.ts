import { api } from "./typicode";
import { URLS } from "@/constans";

export const feedback = api.injectEndpoints({
    endpoints: (build) => ({
        postFeedback: build.mutation({
            query(body) {
                return {
                    url: URLS.FEED_BACK,
                    method: "POST",
                    body,
                };
            },
        }),
        postApplication: build.mutation({
            query(body) {
                return {
                    url: URLS.APPLICATION,
                    method: "POST",
                    body,
                };
            },
        }),
    }),
});

export const { usePostFeedbackMutation, usePostApplicationMutation } = feedback;
