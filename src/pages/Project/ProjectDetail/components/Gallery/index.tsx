import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useGetImagesQuery } from "@/services/projectService";
import { Title, SectionLayout } from "@/components";

export const Gallery = () => {
    const { id } = useParams();

    const { data, isLoading } = useGetImagesQuery(id);

    if (data?.results?.length === 0) {
        return null;
    }

    return (
        <SectionLayout className="md:mt-[156px] mt-[48px]">
            <div className="flex flex-col gap-y-10">
                <Title>Галерея</Title>
                {isLoading ? (
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                        <Skeleton
                            className="h-[305px] w-full"
                            containerClassName="h-[305px] w-full"
                            baseColor={"#323232"}
                            highlightColor={"#202020"}
                            enableAnimation
                        />
                        <Skeleton
                            className="h-[305px] w-full"
                            containerClassName="h-[305px] w-full"
                            baseColor={"#323232"}
                            highlightColor={"#202020"}
                            enableAnimation
                        />
                        <Skeleton
                            className="h-[305px] w-full"
                            containerClassName="h-[305px] w-full"
                            baseColor={"#323232"}
                            highlightColor={"#202020"}
                            enableAnimation
                        />
                        <Skeleton
                            className="h-[305px] w-full"
                            containerClassName="h-[305px] w-full"
                            baseColor={"#323232"}
                            highlightColor={"#202020"}
                            enableAnimation
                        />
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                        {data?.results?.map((item: any, index: number) => (
                            <img
                                src={item.image}
                                key={index}
                                className="h-[305px] w-full rounded-[12px] object-cover"
                            />
                        ))}
                    </div>
                )}
            </div>
        </SectionLayout>
    );
};
