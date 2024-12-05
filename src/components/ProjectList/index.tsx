import { useState } from "react";

import { useGetProjectQuery } from "@/services/projectService";
import { Pagination } from "../Pagination";
import { ProjectCard } from "../ProjectCard";
import { ProjectCardSkeleton } from "../ProjectCardSkeleton";

export const ProjectList = ({ type }: { type?: "stock" | "base" }) => {
    const [page, setPage] = useState(1);

    const { data, isLoading, isFetching } = useGetProjectQuery({ page: page, pageSize: 8 });

    // if (isLoading) {
    //     return (
    //         <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
    //             <div className="animate-pulse bg-gray-600 md:h-[400px] h-[280px] rounded-[12px]" />
    //             <div className="animate-pulse bg-gray-600 md:h-[400px] h-[280px] rounded-[12px]" />
    //             <div className="animate-pulse bg-gray-600 md:h-[400px] h-[280px] rounded-[12px]" />
    //             <div className="animate-pulse bg-gray-600 md:h-[400px] h-[280px] rounded-[12px]" />
    //             <div className="animate-pulse bg-gray-600 md:h-[400px] h-[280px] rounded-[12px]" />
    //             <div className="animate-pulse bg-gray-600 md:h-[400px] h-[280px] rounded-[12px]" />
    //             <div className="animate-pulse bg-gray-600 md:h-[400px] h-[280px] rounded-[12px]" />
    //         </div>
    //     );
    // }

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
                ) : (
                    data?.results.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item?.name}
                            shortDescription={item?.short_description}
                            image={item?.image}
                            id={item?.id}
                            // status={status}
                        />
                    ))
                )}
            </div>
            <Pagination count={data?.count} page={page} setPage={setPage} pageSize={8} />
        </div>
    );
};
