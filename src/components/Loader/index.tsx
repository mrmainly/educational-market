export const Loader = () => {
    return (
        <div className="fixed h-screen w-full h-full top-0 z-50 bg-[#000] px-20 py-10">
            <div className="h-full flex flex-col items-center justify-center gap-y-6 relative">
                <div className="flex flex-col items-center justify-center gap-4 h-full">
                    <div className="flex-1 flex flex-col justify-center  xl:gap-y-24 lg:gap-y-12 md:gap-y-8 gap-y-[25px] z-20">
                        <p className="loader-text xl:text-8xl lg:text-7xl md:text-5xl sm:text-4xl xs:text-2xl text-xl font-bold project-text appearance opacity-[0]">
                            МАГАЗИН
                            <br /> ОБРАЗОВАТЕЛЬНЫХ НАБОРОВ
                        </p>
                        <p className="loader-text xl:text-8xl lg:text-7xl md:text-5xl sm:text-4xl xs:text-2xl text-xl font-bold project-text text-right appearance opacity-[0]">
                            EDUCATIONAL
                            <br /> MARKET IOT
                        </p>
                    </div>
                    <div className="text-lg sm:text-2xl !justify-self-end">Загрузка...</div>
                </div>
            </div>
        </div>
    );
};
