import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";

import { ROUTES } from "@/constans";

gsap.registerPlugin(useGSAP);

export const ProjectCard = ({
    title,
    shortDescription,
    image,
    id,
}: {
    title?: string;
    shortDescription?: string;
    image?: string;
    id?: number;
    status?: number;
}) => {
    const navigate = useNavigate();

    return (
        <div
            className={`project-card md:h-[400px] h-[280px] rounded-[12px]  cursor-pointer relative group/item`}
            onClick={() => navigate(ROUTES.PROJECTS + "/" + id)}
        >
            <img src={image} className="z-0 absolute w-full h-full rounded-[12px] object-cover" />
            <div
                style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(131, 20, 77, 0.90) 100%)" }}
                className="w-full h-[0px] rounded-[12px] absolute bottom-0 left-0 opacity-0 group-hover/item:opacity-100 group-hover/item:h-full transition-all duration-300 ease-linear"
            ></div>
            <div className="md:p-6 p-4 flex flex-col justify-end h-full">
                <p className="md:text-3xl text-xl font-bold z-10">{title}</p>

                <div className="overflow-hidden opacity-0 text-lg z-10 max-h-[0px] group-hover/item:opacity-100 group-hover/item:max-h-[90px] transition-all duration-300 ease-linear">
                    {shortDescription}
                </div>
            </div>
        </div>
    );
};
