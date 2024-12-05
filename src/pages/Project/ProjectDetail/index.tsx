import { useParams } from "react-router-dom";

import { useGetDetailProjectQuery } from "@/services";
import { ProjectDetailInfo, TaskList, Gallery } from "./components";
import { ApplicationFormSection, ContactsForm } from "@/components";

export const ProjectDetailPage = () => {
    const { id } = useParams();

    const { data } = useGetDetailProjectQuery({ id: id });

    return (
        <div className="flex flex-col pt-[124px]">
            <ProjectDetailInfo />
            <TaskList />
            <Gallery />
            {data?.status?.id === 1 ? <ContactsForm /> : <ApplicationFormSection />}
        </div>
    );
};
