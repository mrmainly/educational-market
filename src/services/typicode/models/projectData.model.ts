export type projectDataModel = {
    id: number;
    name: string;
    short_description: string;
    description: string;
    image: string;
    sort_index: number;
    created_at: string;
    updated_at: string;
    is_active: boolean;
    status: {
        id: number;
        is_active: boolean;
        is_application_date: boolean;
        name: string;
        second_name: string;
        sort_index: number;
    };
    application_date?: string;
};
