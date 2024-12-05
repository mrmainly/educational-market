import { SectionLayout } from "@/components";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const items = [
    {
        texts: [
            "Образовательные наборы IoT предлагают курсы, которые охватывают теорию и практику, позволяя участникам создавать собственные IoT-проекты.",
        ],
        date: "Обучение и курсы",
    },
    {
        texts: [
            "Наборы конструктора содержат все необходимые компоненты для создания и программирования устройств, способствуя развитию инженерных навыков.",
        ],
        date: "Набор конструктора",
    },
    {
        texts: [
            "Облачные системы позволяют управлять IoT-устройствами удаленно, обеспечивая хранение данных и анализ, что создает интерактивную образовательную среду.",
        ],
        date: "Облачные системы управления",
    },
];

export const TimelineSection = () => {
    useGSAP(() => {
        const width = document.querySelector(".timeline-arrow")?.getBoundingClientRect().width ?? 0;
        const height = document.querySelector(".timeline-arrow")?.getBoundingClientRect().height ?? 0;

        const timelineItems = document.querySelectorAll(".timeline-item");

        const mm = gsap.matchMedia();

        mm.add("(min-width: 960px)", () => {
            const duration = 2.4;

            gsap.from(".timeline-arrow", {
                width: 0,
                duration: duration,
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline-animation-section",
                    start: "top center",
                    scrub: false,
                },
            });

            timelineItems.forEach((timelineItem) => {
                //  let offsetWidth = 40;
                //  for (let i = 0; i < index; i++) {
                //      offsetWidth += timelineItems[i].getBoundingClientRect().width ?? 0;
                //  }

                let offsetWidth =
                    (timelineItem.getBoundingClientRect().x ?? 0) -
                    (document.querySelector(".timeline-arrow")?.getBoundingClientRect().x ?? 0);
                gsap.from(timelineItem, {
                    opacity: 0,
                    duration: 1.4,
                    delay: (duration * offsetWidth) / width,
                    scrollTrigger: {
                        trigger: ".timeline-animation-section",
                        start: "top center",
                        scrub: false,
                    },
                });
            });
        });
        mm.add("(max-width: 959px)", () => {
            const duration = 2;
            gsap.from(".timeline-arrow", {
                height: 0,
                duration: duration,
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline-animation-section",
                    start: "top center",
                    scrub: false,
                },
            });
            timelineItems.forEach((timelineItem, index) => {
                let offsetHeight = 24;
                for (let i = 0; i < index; i++) {
                    offsetHeight += timelineItems[i].getBoundingClientRect().height ?? 0;
                }
                gsap.from(timelineItem, {
                    opacity: 0,
                    duration: 1,
                    delay: (duration * offsetHeight) / height,
                    scrollTrigger: {
                        trigger: ".timeline-animation-section",
                        start: "top center",
                        scrub: false,
                    },
                });
            });
        });
    });

    return (
        <SectionLayout>
            <div className="md:mt-[128px] sm:mt-[80px] mt-[64px] flex flex-row-reverse lg:flex-col timeline-animation-section pl-6 lg:p-0">
                <div className="w-full flex flex-col lg:flex-row lg:pl-10 relative z-20">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="timeline-item pt-6 pl-0 lg:pl-4 flex-1 flex flex-col lg:flex-row gap-4"
                        >
                            <div className="flex-shrink-0 flex flex-row-reverse h-[4px] lg:h-[100%] lg:w-[4px] w-[100%] bg-[#474747] relative z-20">
                                <div className="absolute -top-[4.5px] lg:top-0 right-0 lg:right-[-4px] w-3 h-3 bg-[#474747] rotate-45" />
                                <div className="absolute z-20 top-[-38px] lg:top-[auto] lg:bottom-[-93px] left-[-42px] lg:-left-[38px] flex flex-row lg:flex-col gap-6">
                                    <img src="/icon/animation_circle.svg" className="w-20 h-20 max-w-[none]" />
                                    <h3 className="text-xl font-bold text-[#DC1F81] whitespace-nowrap">{item.date}</h3>
                                </div>
                            </div>
                            <div className="pl-4 lg:pl-0 flex flex-col justify-end gap-4 mb-20">
                                {item.texts.map((text, textIndex) => (
                                    <p key={textIndex} className="text-lg lg:text-xl">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="timeline-arrow h-[auto] lg:h-[4px] w-[4px] lg:w-full bg-white relative z-0">
                    <div className="absolute bottom-[-1%] lg:bottom-[-240%] right-[-9px] lg:right-[-20px] w-0 h-0 border-x-[10px] border-x-[transparent] border-t-[12px] border-t-white lg:border-y-[12px] lg:border-y-[transparent] lg:border-l-[12px] lg:border-l-white" />
                </div>
            </div>
        </SectionLayout>
    );
};
