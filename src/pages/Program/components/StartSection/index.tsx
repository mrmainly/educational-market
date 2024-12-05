import { SectionLayout, Breadcrumb } from "@/components";

import "./index.css";
import { ROUTES } from "@/constans";

export const StartSection = () => {
    return (
        <SectionLayout>
            {/* <Breadcrumb
                pages={[
                    { label: "Главная", route: ROUTES.MAIN },
                    { label: "О нас", main: true },
                ]}
            /> */}
            <div className="spots-left" />
            <div className="flex flex-col">
                <p className="lg:text-5xl md:text-4xl sm:text-3xl md:leading-[42px] text-xl leading-[28px] sm:leading-[38px] lg:leading-[64px] font-bold uppercase text-center  mb-[64px]">
                    Магазин образовательных
                    <br /> наборов
                    <span className="text-[#DC1F81]"> “EMIOT”</span>
                </p>
                {/* <div className="flex justify-between items-center gap-x-6 mb-[48px]">
                    <p className="lg:text-[32px] md:text-[28px] text-lg font-semibold uppercase">ЦЕЛЕВАЯ АУДИТОРИЯ</p>
                    <img src="/img/Alrosa_logo.svg" className="lg:w-[214px] md:w-[180px] sm:w-[120px] w-[91px]" />
                </div> */}
                <div
                    className="md:p-8 p-4 rounded-[20px] flex flex-col lg:flex-row gap-5 border-l-8 border-[#DC1F81]"
                    style={{ background: "rgba(0, 0, 0, 0.25)" }}
                >
                    <div className="flex flex-col md:gap-y-6 gap-y-3">
                        <p className="md:text-[28px] text-[20px] font-bold">Наши клиенты</p>
                        <div className="flex flex-col md:gap-y-5 gap-y-4">
                            <div className="flex xl:gap-x-6 lg:gap-x-3 md:gap-x-4 gap-x-2">
                                <p className="text-[#DC1F81] xl:text-5xl lg:text-3xl md:text-5xl font-bold sm:text-3xl text-2xl">
                                    01
                                </p>
                                <p className="xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-base">
                                    Студенты технических и инженерных специальностей, желающие получить практический
                                    опыт работы с IoT-технологиями;
                                </p>
                            </div>
                            <div className="flex xl:gap-x-6 lg:gap-x-3 md:gap-x-4 gap-x-2">
                                <p className="text-[#DC1F81] xl:text-5xl lg:text-3xl md:text-5xl font-bold sm:text-3xl text-2xl">
                                    02
                                </p>
                                <p className="xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-base">
                                    Ученики старших классов, интересующиеся наукой и технологиями, которые хотят
                                    развивать свои навыки в области программирования и электроники;
                                </p>
                            </div>
                            <div className="flex xl:gap-x-6 lg:gap-x-3 md:gap-x-4 gap-x-2">
                                <p className="text-[#DC1F81] xl:text-5xl lg:text-3xl md:text-5xl font-bold sm:text-3xl text-2xl">
                                    03
                                </p>
                                <p className="xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-base">
                                    Учителя, ищущие новые методы обучения и инструменты для интеграции IoT в учебный
                                    процесс;
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        src="/img/Program.png"
                        className="rounded-[24px] lg:w-[500px] xl:w-[600px] w-full h-[400px] object-cover"
                    />
                </div>
            </div>
        </SectionLayout>
    );
};
