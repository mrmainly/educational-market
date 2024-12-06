import { SectionLayout, ProjectCarousel } from "@/components";

import "./index.css";

export const ProjectSection = () => {
    return (
        <SectionLayout className="mt-[77px]">
            <div className="spots-project-left" />
            <div className="flex flex-col sm:gap-y-28 gap-y-20">
                <ProjectCarousel name="Обычные наборы" type="base" />
                <ProjectCarousel name="Акционные наборы" type="stock" />
            </div>
        </SectionLayout>
    );
};
