import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useGetProjectQuery } from "@/services/projectService";
import { ProjectCard } from "../ProjectCard";
import { Title } from "../Title";
import { contactsSelectors } from "@/reducers";
import { ROUTES } from "@/constans";

import "./index.css";

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="absolute right-[-55px] top-[50%] p-2 cursor-pointer bg-[#ffffff40] hover:bg-white rounded-[64px] transition-all">
            <img src="/icon/rightArrow.svg" onClick={onClick} />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="absolute left-[-55px] top-[50%] p-2 cursor-pointer bg-[#ffffff40] hover:bg-white rounded-[64px] transition-all">
            <img src="/icon/leftArrow.svg" onClick={onClick} />
        </div>
    );
}

export const ProjectCarousel = ({ type, name }: { type?: string; name?: string }) => {
    const navigate = useNavigate();

    const { data, isLoading } = useGetProjectQuery({ pageSize: 5, page: 1 });

    const settings = {
        //@ts-ignore
        infinite: data?.results?.length > 3 ? true : false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dotsClass: `slick-dots dots`,
        // speed: 2000,
        // autoplaySpeed: 2000,
        // autoplay: true,
    };

    if (isLoading) {
        return <>loading...</>;
    }

    if (data?.results?.length === 0 || data?.results === undefined) {
        return <></>;
    }

    return (
        <div className="flex flex-col md:gap-y-10 gap-y-6">
            <div className="flex justify-between items-center">
                <Title>{name}</Title>
                <div
                    className="flex gap-x-3 items-center group/item cursor-pointer"
                    onClick={() => navigate(ROUTES.PROJECTS)}
                >
                    <p className="text-xl font-medium group-hover/item:text-[#DC1F81]  transition-all">
                        Все <span className="hidden md:inline">наборы</span>
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="61"
                        height="16"
                        viewBox="0 0 61 16"
                        fill="none"
                        className="hidden md:block"
                    >
                        <path
                            d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3431 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3431 15.0711L60.7071 8.70711ZM0 9H60V7H0V9Z"
                            className="fill-white group-hover/item:fill-[#DC1F81] transition-all w-[61px] h-[16px]"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                        className="md:hidden"
                    >
                        <path
                            d="M16.7071 8.33211C17.0976 7.94158 17.0976 7.30842 16.7071 6.91789L10.3431 0.553932C9.95262 0.163408 9.31946 0.163408 8.92893 0.553932C8.53841 0.944457 8.53841 1.57762 8.92893 1.96815L14.5858 7.625L8.92893 13.2819C8.53841 13.6724 8.53841 14.3055 8.92893 14.6961C9.31946 15.0866 9.95262 15.0866 10.3431 14.6961L16.7071 8.33211ZM0 8.625H16V6.625H0V8.625Z"
                            className="fill-white group-hover/item:fill-[#DC1F81] transition-all "
                        />
                    </svg>
                </div>
            </div>

            <Slider {...settings}>
                {data?.results.map((item, index) => (
                    <div key={index}>
                        <div className="lg:w-[630px] w-[310px]">
                            <ProjectCard
                                title={item.name}
                                shortDescription={item.short_description}
                                image={item.image}
                                id={item.id}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
