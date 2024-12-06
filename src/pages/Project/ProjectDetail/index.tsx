import { useParams } from "react-router-dom";

import { useGetDetailProjectQuery } from "@/services";
import { ProjectDetailInfo, TaskList, Gallery } from "./components";
import { ApplicationFormSection, ContactsForm } from "@/components";
import { projectList } from "@/mocks";

export const ProjectDetailPage = () => {
    const { id } = useParams();

    const currentProject = projectList.find((item) => item.id === Number(id));

    return (
        <div className="flex flex-col py-[124px]">
            <ProjectDetailInfo />
            <TaskList include={currentProject?.included} title="Что входит в набор" />
            <TaskList include={currentProject?.why_choose} title="Почему стоит выбрать этот набор" />
        </div>
    );
};
