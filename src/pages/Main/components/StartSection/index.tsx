import { useNavigate } from "react-router-dom";
import { Ref } from "react";

import { SectionLayout, Button } from "@/components";
import { ROUTES } from "@/constans";
import { useSelector } from "react-redux";
import { contactsSelectors } from "@/reducers";

import "./index.css";
// import Spline from "@splinetool/react-spline";

export const StartSection = ({ splineRef }: { splineRef: Ref<any> }) => {
    const navigate = useNavigate();

    const contactsData = useSelector(contactsSelectors.contactsData);

    return (
        <div>
            {/* <div
                style={{ background: "url(/img/Vector.png)", animation: "scroll1 20s linear infinite !important" }}
                className="absolute top-0 w-full h-full"
            /> */}

            <SectionLayout className="overflow-hidden pt-[124px]">
                <div className="spots-top z-20" />

                <div className="animation-track z-10 opacity-50">
                    <div className="animation-background-two" />
                    <div className="animation-background" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-full z-10 bg-gradient-to-t from-[#0A0A0A]" />

                <img src="/spots/Spots.png" className="hidden xl:block spots-img z-20" />
                <div className="xl:h-[900px] lg:h-[600px] pb-[50px] flex flex-col justify-center gap-y-12">
                    <div className="flex flex-col xl:gap-y-24 lg:gap-y-12 md:gap-y-8 gap-y-[25px] z-20">
                        <p className="xl:text-8xl lg:text-7xl md:text-5xl sm:text-4xl text-2xl font-bold project-text appearance">
                            МАГАЗИН
                            <br /> ОБРАЗОВАТЕЛЬНЫХ НАБОРОВ
                        </p>
                        <p className="xl:text-8xl lg:text-7xl md:text-5xl sm:text-4xl text-2xl font-bold text-right appearance">
                            EDUCATIONAL
                            <br /> MARKET IOT
                        </p>
                    </div>
                    <div className="flex sm:gap-x-6 gap-x-4 z-20 w-full justify-center">
                        <Button onClick={() => navigate(ROUTES.PROJECTS)}>
                            <p className="min-w-[120px]">Наборы</p>
                        </Button>
                        <button
                            className="xl:py-4 xl:px-8 py-3 px-6 rounded-[64px] sm:text-lg text-base font-medium active:scale-90 hover:shadow-[0_6px_32px_0px_rgba(220,12,126,0.35)] transition-all duration-300"
                            style={{
                                border: "1px solid var(--Secondary, #FFF)",
                            }}
                            onClick={() => navigate(ROUTES.PROGRAMS)}
                        >
                            <p className="min-w-[120px]">О нас</p>
                        </button>
                    </div>
                </div>
                <div className="absolute h-[300%] w-[200%] top-[-100%] left-[-50%] 2xl:h-[150%] 2xl:w-[150%] 2xl:top-[-25%] 2xl:left-[-25%]">
                    {/* <Spline
                        ref={splineRef}
                        scene="https://prod.spline.design/bzKOMbMxQUNTvaGT/scene.splinecode"
                        className="spline-container scale-[0.2] md:scale-[0.3] lg:scale-[0.4] xl:scale-[0.5] 2xl:scale-[0.6]"
                    /> */}
                    <canvas
                        ref={splineRef}
                        className="spline-container scale-[0.2] md:scale-[0.3] lg:scale-[0.4] xl:scale-[0.5] 2xl:scale-[0.6]"
                    />
                </div>
            </SectionLayout>
        </div>
    );
};
