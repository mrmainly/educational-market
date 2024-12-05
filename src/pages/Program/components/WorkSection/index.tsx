import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "gsap/all";

import { SectionLayout, Title } from "@/components";

gsap.registerPlugin(ScrollTrigger);

export const WorkSection = () => {
    const items: { title: string; texts: { textHighlighted?: string; text: string }[] }[] = [
        {
            title: "Сборка устройств",
            texts: [
                {
                    textHighlighted: "Студенты используют ",
                    text: "компоненты из набора для создания различных IoT-устройств, таких как датчики и контроллеры, что помогает им понять основы аппаратного обеспечения.",
                },
            ],
        },
        {
            title: "Программирование",
            texts: [
                {
                    textHighlighted: "Участники обучаются ",
                    text: "программированию устройств с помощью простых языков и сред разработки, что развивает их навыки кодирования и логического мышления",
                },
            ],
        },
        {
            title: "Подключение к облаку",
            texts: [
                {
                    textHighlighted: "Участники обучаются ",
                    text: "к облачным платформам, что позволяет собирать и анализировать данные в реальном времени, а также управлять устройствами удаленно.",
                },
                // { text: "Реализация готового ПО на рынке" },
            ],
        },
        {
            title: "Проектная работа",
            texts: [
                {
                    textHighlighted: "Студенты работают ",
                    text: "над проектами, применяя полученные знания на практике, что способствует развитию креативности и командного взаимодействия.",
                },
            ],
        },
    ];

    useGSAP(() => {
        function getYAmount() {
            const containerHeight = document.querySelector(".work-way")?.getBoundingClientRect().height ?? 0;
            //   const height = document.querySelector(".pin-geometry")?.getBoundingClientRect().height ?? 0;
            return containerHeight;
        }
        const height = document.querySelector(".pin-geometry")?.getBoundingClientRect().height ?? 0;
        const workTitles = document.querySelectorAll(".work-title");
        const workLines = document.querySelectorAll(".work-step-line");
        const workCircles = document.querySelectorAll(".work-step-circle");

        workCircles.forEach((workCircle, index) => {
            gsap.to(workLines[index], {
                backgroundColor: "#DC1F81",
                duration: 0.3,
                scrollTrigger: {
                    trigger: workCircle,
                    start: `top 40%`,
                    end: `bottom+=${height} 40%`,
                    toggleActions: "play reverse play reverse",
                },
            });
            gsap.to(workCircle, {
                fill: "#DC1F81",
                stroke: "#ffffff",
                duration: 0.3,
                scrollTrigger: {
                    trigger: workCircle,
                    start: `top 40%`,
                    end: `bottom+=${height} 40%`,
                    toggleActions: "play reverse play reverse",
                },
            });
            gsap.to(workTitles[index], {
                color: "#DC1F81",
                duration: 0.3,
                scrollTrigger: {
                    trigger: workCircle,
                    start: `top 40%`,
                    end: `bottom+=${height} 40%`,
                    toggleActions: "play reverse play reverse",
                },
            });
        });

        gsap.to(".pin-geometry", {
            y: getYAmount(),
            ease: "none",
            scrollTrigger: {
                trigger: ".work-way",
                start: `top 40%`,
                end: `bottom+=${height} 40%`,
                scrub: true,
            },
        });
    });

    return (
        <SectionLayout>
            <div className="flex flex-col md:gap-y-[64px] sm:gap-y-[48px] gap-y-[24px] md:mt-[128px] sm:mt-[80px] mt-[64px] work-container">
                <Title>как это работает?</Title>
                <div className="flex flex-row work-animation-container pl-4 lg:pl-6">
                    <div className="min-w-2 w-2 lg:min-w-3 lg:w-3 h-auto bg-[#474747] rounded-xl overflow-hidden work-way">
                        <div className="w-2 lg:w-3 h-[200px] bg-[#DC1F81] rounded-xl translate-y-[-100%] pin-geometry" />
                    </div>
                    <div className="flex flex-col gap-12">
                        {items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex flex-col gap-2 md:gap-4 lg:gap-6 h-[200px]">
                                <h3 className="ml-6 md:ml-12 lg:ml-20 text-xl md:text-[32px] lg:text-[48px] font-bold work-title uppercase">
                                    {item.title}
                                </h3>
                                <div className="bg-[#474747] h-1 w-full relative work-step-line">
                                    <svg
                                        className="absolute left-0 top-0 translate-y-[-50%] translate-x-[calc(-50%-4px)] lg:translate-x-[calc(-50%-6px)] w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
                                        width="60"
                                        height="60"
                                        viewBox="0 0 60 60"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="30"
                                            cy="30"
                                            r="26"
                                            fill="#474747"
                                            stroke="#5a5a5a"
                                            strokeWidth="8"
                                            className="work-step-circle"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-6 md:ml-12 lg:ml-20 flex flex-col gap-2 mt-1">
                                    {item.texts.map((text, textIndex) => (
                                        <p key={textIndex} className="text-md md:text-lg lg:text-xl text-white">
                                            {text.textHighlighted && (
                                                <span className="text-[#DC1F81] font-bold">{text.textHighlighted}</span>
                                            )}
                                            {text.text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
};
