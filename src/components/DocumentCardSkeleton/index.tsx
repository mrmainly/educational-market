import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const DocumentCardSkeleton = () => {
    return (
        <div className="flex justify-between md:p-6 p-4 items-center bg-[#1E1E1E] rounded-[20px] relative border border-[#1E1E1E] ">
            <img src="/img/Noise.png" className="absolute w-full h-full left-0 z-0" />
            <div className="flex flex-col md:gap-y-3 gap-y-1 z-10 w-full overflow-hidden ">
                <Skeleton
                    className="truncate md:h-[28px] h-[20px] font-semibold text-wrap cursor-pointer hover:text-[#DC1F81] transition-all"
                    containerClassName="flex-1"
                    baseColor={"#323232"}
                    highlightColor={"#202020"}
                    enableAnimation
                />
                <Skeleton
                    containerClassName="flex-1"
                    className="md:h-[20px] h-[16px]]"
                    baseColor={"#323232"}
                    highlightColor={"#202020"}
                    enableAnimation
                />
            </div>
        </div>
    );
};
