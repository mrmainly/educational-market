import { SectionLayout, Title } from "@/components";

const Item = ({ icon, children }: { icon: string; children: React.ReactNode }) => {
    return (
        <div className="flex md:gap-x-8 gap-x-4 md:items-center pl-1 pb-1">
            <div
                className="p-[1px]  md:rounded-[20px] rounded-[8px]  bg-gradient-to-r from-[#3CA2FF] to-[#FF4CB6] flex h-max"
                style={{
                    boxShadow: "0px 10px 24px 0px rgba(80, 149, 201, 0.25)",
                }}
            >
                <div className="bg-[#0D0D0D] md:p-6 p-[10px] md:rounded-[20px] rounded-[8px] ">
                    <div className="md:w-[64px] w-[32px]">
                        <img src={icon} />
                    </div>
                </div>
            </div>
            <div className="md:text-[24px] text-base font-bold">{children}</div>
        </div>
    );
};

export const ProblemSection = () => {
    const items = [
        {
            icon: "/icon/PersonMinus.svg",
            children: (
                <p>
                    Студенты часто не имеют{" "}
                    <span className="text-[#DC1F81]">возможности работать с реальными IoT-устройствами,</span> что
                    ограничивает их навыки и понимание технологий.
                </p>
            ),
        },
        {
            icon: "/icon/Setting.svg",
            children: (
                <p>
                    <span className="text-[#DC1F81]">Традиционные учебные материалы </span> не всегда охватывают
                    современные IoT-технологии, что затрудняет усвоение новых знаний
                </p>
            ),
        },
        {
            icon: "/icon/squareArrow.svg",
            children: (
                <p>
                    Учителя <span className="text-[#DC1F81]">могут не иметь</span> необходимых ресурсов и инструментов
                    для эффективного обучения IoT,{" "}
                    <span className="text-[#DC1F81]">что снижает качество образования</span>
                </p>
            ),
        },
        {
            icon: "/icon/squareArrow.svg",
            children: (
                <p>
                    <span className="text-[#DC1F81]">что снижает качество образования</span>
                    IoT <span className="text-[#DC1F81]">требует знаний</span> из различных областей, и без
                    соответствующих наборов сложно интегрировать эти знания в учебный процесс
                </p>
            ),
        },
    ];

    return (
        <SectionLayout>
            <div className="flex flex-col md:mt-[128px] sm:mt-[80px] mt-[64px]">
                <Title>КЛЮЧЕВЫЕ ПРОБЛЕМЫ</Title>
                {/* <p className="md:mt-[64px] mt-[24px] uppercase md:text-[32px] text-lg font-semibold">
                    для Корпоративного бизнеса
                </p> */}
                <div className="flex flex-col md:gap-y-10 gap-y-5 md:mt-[36px] mt-[24px]">
                    {items.map((item, index) => (
                        <Item key={index} icon={item.icon}>
                            {item.children}
                        </Item>
                    ))}
                </div>
                {/* <p className="md:mt-[64px] mt-[24px] uppercase md:text-[32px] text-lg font-semibold">
                    для разработчиков
                </p>
                <div className="flex flex-col md:gap-y-10 gap-y-5 md:mt-[36px] mt-[24px] pt-[1px]">
                    {items2.map((item, index) => (
                        <Item key={index} icon={item.icon}>
                            {item.children}
                        </Item>
                    ))}
                </div> */}
            </div>
        </SectionLayout>
    );
};
