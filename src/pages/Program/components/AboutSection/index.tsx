import { SectionLayout, Title } from "@/components";

const Item = ({ children, icon }: { children: React.ReactNode; icon: string }) => {
    return (
        <div className="md:p-8 p-4 relative flex flex-col md:gap-y-6 gap-y-3 bg-[#1E1E1E] rounded-[20px] overflow-hidden">
            <img src="/img/Texture.png" className="absolute z-0 top-0 left-0 w-full h-full rounded-[20px] opacity-20" />
            <img src="/img/Noise.png" className="absolute z-0 top-0 left-0 w-full h-full rounded-[20px]" />
            <img src={icon} className="z-10 md:w-[64px] w-[32px]" />
            <div className="z-10">{children}</div>
        </div>
    );
};

export const AboutSection = () => {
    return (
        <SectionLayout>
            <div className="md:mt-[228px] sm:mt-[80px] mt-[64px] flex flex-col gap-y-6">
                <Title>о важном</Title>
                {/* <p className="md:text-2xl text-base">
                    Иностранный отток компаний из российского IT сектора создал острую потребность в отечественном ПО и
                    открыл возможность для отечественных IT компаний возможность проявить себя.
                </p> */}
                <div
                    className="md:p-8 p-4 rounded-[20px] flex flex-col gap-y-4 border-l-8 border-[#DC1F81] relative"
                    style={{ background: "rgba(0, 0, 0, 0.25)" }}
                >
                    {/* <p className="md:text-[32px] text-[20px] font-bold uppercase ">Решение</p> */}
                    <p className="md:text-2xl text-base">
                        Обучающие наборы IoT важны, потому что они обеспечивают практический опыт и помогают развивать
                        навыки, необходимые для работы с современными технологиями, а также стимулируют креативность и
                        инновации в создании новых решений.
                    </p>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        <Item icon="/icon/BusinessCenter.svg">
                            <p className="md:text-2xl text-base font-bold">
                                <span className="text-[#DC1F81]">Практическое применение знаний</span> Обучающие наборы
                                IoT предоставляют возможностьHands-on практики, что позволяет лучше понять, как работают
                                различные компоненты и технологии, а также развить навыки программирования и
                                проектирования.
                            </p>
                        </Item>
                        <Item icon="/icon/PersonAdd.svg">
                            <p className="md:text-2xl text-base font-bold">
                                <span className="text-[#DC1F81]">Развитие креативности и инноваций</span> Использование
                                обучающих наборов стимулирует креативное мышление и инновации, позволяя создавать
                                уникальные проекты и решения, которые могут быть применены в реальных сценариях.
                            </p>
                        </Item>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
};
