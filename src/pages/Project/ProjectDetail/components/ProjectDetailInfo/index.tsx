import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import dayjs from "dayjs";

import { SectionLayout, Breadcrumb } from "@/components";
import { useGetDetailProjectQuery } from "@/services/projectService";
import { contactsSelectors } from "@/reducers";
import { ROUTES } from "@/constans";

import "./index.css";

export const ProjectDetailInfo = () => {
    const { id } = useParams();

    const { data, isLoading } = useGetDetailProjectQuery({ id: id });
    const contactData = useSelector(contactsSelectors.contactsData);

    return (
        <SectionLayout>
            <Breadcrumb
                pages={[
                    { label: "Главная", route: ROUTES.MAIN },
                    { label: "Образовательные наборы", route: ROUTES.PROJECTS },
                    { label: data?.name, main: true },
                ]}
            />
            {isLoading ? (
                <Skeleton
                    className="w-full h-[468px]"
                    containerClassName="flex-1 h-full"
                    baseColor={"#323232"}
                    highlightColor={"#202020"}
                    enableAnimation
                />
            ) : (
                <div>
                    <div className="spots-top" />
                    <div className="flex flex-col md:flex-row md:gap-5 gap-4 ">
                        <img
                            src={data?.image}
                            className="sm:h-[400px] h-[260px] w-full md:w-[468px] rounded-[24px] object-cover"
                        />

                        <div className="flex flex-col gap-y-5">
                            <p className="lg:text-5xl font-bold text-3xl">{data?.name}</p>

                            {data?.application_date && (
                                <div className="py-2 px-3 border-[1px] border-[#FFF] rounded-[8px] w-max flex gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_294_9636)">
                                            <path
                                                d="M7 11H9V13H7V11ZM21 6V20C21 21.1 20.1 22 19 22H5C3.89 22 3 21.1 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4H16V2H18V4H19C20.1 4 21 4.9 21 6ZM5 8H19V6H5V8ZM19 20V10H5V20H19ZM15 13H17V11H15V13ZM11 13H13V11H11V13Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_294_9636">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="lg:text-xl text-base">
                                        Сбор заявок до {dayjs(data?.application_date).format("DD.MM.YYYY")}
                                    </p>
                                </div>
                            )}

                            <p className="lg:text-xl text-base">
                                {data?.description && <div dangerouslySetInnerHTML={{ __html: data?.description }} />}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </SectionLayout>
    );
};
