import "react-loading-skeleton/dist/skeleton.css";

import { Title, SectionLayout } from "@/components";

import { includeType } from "@/mocks";

export const TaskList = ({ include, title }: { include?: includeType[]; title: string }) => {
    return (
        <SectionLayout className="md:mt-[92px] mt-[48px]">
            <div className="flex flex-col md:gap-y-10 gap-y-4">
                <Title>{title}</Title>
                {include?.map((item: any, index: number) => (
                    <div className="flex gap-x-6 md:items-center">
                        <p className="md:text-7xl text-2xl font-[860] md:w-[100px]">0{index + 1}</p>
                        <div className="flex flex-col gap-y-2">
                            <p className="font-bold text-lg">{item?.title}</p>
                            <p className="font-medium">{item?.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionLayout>
    );
};
