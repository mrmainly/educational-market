import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ProjectCardSkeleton = () => {
    return (
        <div className={`project-card flex flex-col md:h-[400px] h-[280px] rounded-[12px] bg-[#323232]`}>
            <div className="md:px-6 md:pt-6 px-4 pt-4 flex-1 flex flex-col rounded-[12px]">
                <Skeleton
                    className="h-full"
                    containerClassName="flex-1 h-full"
                    baseColor={"#323232"}
                    highlightColor={"#202020"}
                    enableAnimation
                />
            </div>
            <div className="md:p-6 p-4 flex flex-col justify-end">
                <p className="md:text-3xl text-xl font-bold">
                    <Skeleton enableAnimation baseColor={"#323232"} highlightColor={"#202020"} />
                </p>
                <div className="opacity-100">
                    <Skeleton enableAnimation baseColor={"#323232"} highlightColor={"#202020"} />
                </div>
            </div>
        </div>
    );
};
