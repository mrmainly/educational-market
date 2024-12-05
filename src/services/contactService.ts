import { api } from "./typicode";
import { URLS } from "@/constans";
import { contactsModel } from "@/reducers";

export const contact = api.injectEndpoints({
    endpoints: (build) => ({
        getContact: build.query({
            query: () => ({
                url: URLS.CONTACT,
                params: {
                    page: 1,
                    page_size: 1,
                },
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // console.log("ASD", memberPermissionGetTransform(data?.member_permissions));
                    dispatch(contactsModel.setContactsData(data?.results[0]));
                } catch (err) {
                    console.log("error... ", err);
                }
            },
        }),
    }),
});

export const { useGetContactQuery } = contact;
