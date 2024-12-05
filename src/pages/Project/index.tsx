import { useState } from "react";

import { SectionLayout, ProjectList, ContactsForm, Breadcrumb, ApplicationFormSection } from "@/components";
import { ROUTES } from "@/constans";

export const ProjectPage = () => {
    const [currentType, setCurrentType] = useState<"base" | "stock">("base");

    return (
        <div className="pt-[124px]">
            <SectionLayout>
                <Breadcrumb
                    pages={[
                        { label: "Главная", route: ROUTES.MAIN },
                        { label: "Образовательные наборы", main: true },
                    ]}
                />
                <div className="project-top-spots" />
                <div className="flex flex-col md:gap-y-10 gap-y-4">
                    <div className="flex justify-between items-center">
                        <div
                            className={`flex cursor-pointer`}
                            onClick={() => {
                                setCurrentType("base");
                            }}
                        >
                            <img
                                src="/icon/Rectangle.svg"
                                className={`md:w-[22px] w-[10px] md:h-[56px] h-[28px] ${
                                    currentType === "base" ? "opacity-100" : "opacity-0"
                                } transition-all duration-300 ${currentType === "base" ? "lg:mr-6 mr-3" : "mr-0"}`}
                            />
                            <p
                                className={`lg:text-5xl md:text-4xl font-bold ${
                                    currentType !== "base" && "opacity-25"
                                } transition-all duration-300 uppercase `}
                            >
                                Обычные наборы
                            </p>
                        </div>
                        <div
                            className={`flex cursor-pointer`}
                            onClick={() => {
                                setCurrentType("stock");
                            }}
                        >
                            <img
                                src="/icon/Rectangle.svg"
                                className={`md:w-[22px] w-[10px] md:h-[56px] h-[28px] ${
                                    currentType === "stock" ? "opacity-100" : "opacity-0"
                                } transition-all duration-300 ${currentType === "stock" ? "lg:mr-6 mr-3" : "mr-0"}`}
                            />
                            <p
                                className={`lg:text-5xl md:text-4xl font-bold ${
                                    currentType !== "stock" && "opacity-25"
                                } transition-all duration-300 uppercase `}
                            >
                                Акционные наборы
                            </p>
                        </div>
                    </div>
                    <ProjectList type={currentType} />
                </div>
            </SectionLayout>
        </div>
    );
};
