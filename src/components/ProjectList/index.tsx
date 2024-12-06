import { useState } from "react";

import { useGetProjectQuery } from "@/services/projectService";
import { Pagination } from "../Pagination";
import { ProjectCard } from "../ProjectCard";
import { ProjectCardSkeleton } from "../ProjectCardSkeleton";

import { projectList } from "@/mocks";

export const ProjectList = ({ type }: { type?: "stock" | "base" | "basket" }) => {
    const [page, setPage] = useState(1);

    const { data, isLoading, isFetching } = useGetProjectQuery({ page: page, pageSize: 8 });

    return (
        <div className="flex flex-col gap-y-10 mb-20">
            <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
                {isLoading ? (
                    <>
                        <ProjectCardSkeleton />
                        <ProjectCardSkeleton />
                        <ProjectCardSkeleton />
                        <ProjectCardSkeleton />
                    </>
                ) : type !== "basket" ? (
                    projectList
                        .filter((item) => item.type === type)
                        .map((item, index) => (
                            <ProjectCard
                                key={index}
                                title={item.title}
                                shortDescription={item?.shortDesc}
                                image={item?.image}
                                id={item?.id}
                                // status={status}
                            />
                        ))
                ) : (
                    projectList.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.title}
                            shortDescription={item?.shortDesc}
                            image={item?.image}
                            id={item?.id}
                            // status={status}
                        />
                    ))
                )}
            </div>
            {/* <Pagination count={data?.count} page={page} setPage={setPage} pageSize={8} /> */}
        </div>
    );
};
