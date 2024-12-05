import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Title, SectionLayout } from "@/components";
import { useGetTaskQuery } from "@/services/projectService";

export const TaskList = () => {
    const { id } = useParams();

    const { data, isLoading } = useGetTaskQuery({ id: id, page: 1, pageSize: 10000 });

    if (data?.results?.length === 0) {
        return null;
    }

    return (
        <SectionLayout className="md:mt-[92px] mt-[48px]">
            <div className="flex flex-col md:gap-y-10 gap-y-4">
                <Title>Задачи</Title>
                {isLoading ? (
                    <div className="flex flex-col md:gap-y-10 gap-y-4">
                        <Skeleton
                            className="w-full h-[100px]"
                            containerClassName="flex-1 h-full"
                            baseColor={"#323232"}
                            highlightColor={"#202020"}
                            enableAnimation
                        />
                        <Skeleton
                            className="w-full h-[100px]"
                            containerClassName="flex-1 h-full"
                            baseColor={"#323232"}
                            highlightColor={"#202020"}
                            enableAnimation
                        />
                        <Skeleton
                            className="w-full h-[100px]"
                            containerClassName="flex-1 h-full"
                            baseColor={"#323232"}
                            highlightColor={"#202020"}
                            enableAnimation
                        />
                        <Skeleton
                            className="w-full h-[100px]"
                            containerClassName="flex-1 h-full"
                            baseColor={"#323232"}
                            highlightColor={"#202020"}
                            enableAnimation
                        />
                        <Skeleton
                            className="w-full h-[100px]"
                            containerClassName="flex-1 h-full"
                            baseColor={"#323232"}
                            highlightColor={"#202020"}
                            enableAnimation
                        />
                        <Skeleton
                            className="w-full h-[100px]"
                            containerClassName="flex-1 h-full"
                            baseColor={"#323232"}
                            highlightColor={"#202020"}
                            enableAnimation
                        />
                    </div>
                ) : (
                    data?.results?.map((item: any, index: number) => (
                        <div className="flex gap-x-6 md:items-center">
                            <p className="md:text-7xl text-2xl font-[860] md:w-[100px]">0{index + 1}</p>
                            <p className="font-medium">{item?.description}</p>
                        </div>
                    ))
                )}
            </div>
        </SectionLayout>
    );
};
