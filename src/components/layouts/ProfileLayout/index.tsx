import { useNavigate } from "react-router-dom";
import { IconButton, Tooltip } from "@material-tailwind/react";

import { MainLayout } from "../MainLayout";
import { ROUTES } from "@/constans";
import { SectionLayout } from "@/components/SectionLayout";

const SideBarItem = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
    return (
        <div
            onClick={onClick}
            className="py-2 px-4 w-full text-base bg-[#20141c] rounded-[20px] cursor-pointer hover:text-[#DC1F81] transition-all"
        >
            {children}
        </div>
    );
};

export const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[100vh]  text-white overflow-hidden relative pt-[128px]">
            <SectionLayout>
                <div className="flex flex-row gap-x-8">
                    <div
                        className="h-max w-[300px] rounded-[20px] z-10 p-4"
                        style={{ background: "rgba(0, 0, 0, 0.25)", border: "1px solid #3A3A3A" }}
                    >
                        <div className="flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <div>Имя профиля</div>
                                <div>
                                    <Tooltip content="Выход">
                                        <IconButton size="sm">В</IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                            <SideBarItem onClick={() => navigate(ROUTES.PROFILE)}>Профиль</SideBarItem>
                            <div className="flex flex-col gap-y-2">
                                <div className="text-sm">Корзина</div>
                                <SideBarItem>Мои наборы</SideBarItem>
                                <SideBarItem>Избранные</SideBarItem>
                                <SideBarItem onClick={() => navigate(ROUTES.BASKET)}>Корзина</SideBarItem>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <div className="text-sm">Финансы</div>
                                <SideBarItem>Способ оплаты</SideBarItem>
                                <SideBarItem>Реквизиты</SideBarItem>
                            </div>
                        </div>
                    </div>
                    <div>{children}</div>
                </div>
            </SectionLayout>

            <div className="spots-top" />
            <div className="spots-bottom" />
            <div className="spots-right" />
        </div>
    );
};
