import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { useSelector } from "react-redux";

import { ApplicationModal } from "../ApplicationModal";
import { contactsSelectors } from "@/reducers";
import { ROUTES } from "@/constans";
import { useGetContactQuery } from "@/services";

export const Header = () => {
    const { isLoading } = useGetContactQuery(undefined);

    const contactsData = useSelector(contactsSelectors.contactsData);

    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        {
            label: "Главная",
            route: ROUTES.MAIN,
        },
        {
            label: "Образовательные наборы",
            route: ROUTES.PROJECTS,
        },
        {
            label: "О нас",
            route: ROUTES.PROGRAMS,
        },
        // {
        //     label: "",
        //     route: ROUTES.DOCUMENTS,
        // },
    ];

    return (
        <div className="w-full flex justify-center">
            <header
                className="hidden lg:flex px-10 py-3 z-50 fixed rounded-[24px]  mt-5 text-white"
                style={{
                    backdropFilter: "blur(6px)",
                    background: "rgba(0, 0, 0, 0.25)",
                    WebkitBackdropFilter: "blur(6px)",
                    border: "1px solid #3A3A3A",
                }}
            >
                <div className="flex gap-x-8">
                    {/* <img src="/headerLogo.svg" style={{ width: 27, height: 46 }} /> */}
                    <img src="/logoHeader.png" style={{ width: 71, height: 50, cursor: "pointer" }} />
                    {menuItems.map((item, index) => (
                        <div key={index} className="py-3 flex flex-col">
                            <Link
                                to={item.route}
                                className="hover:text-[#DC1F81] text-lg font-medium transition ease-in-out"
                            >
                                {item.label}
                            </Link>
                            <div
                                className={`h-[2px] w-0 bg-[#DC1F81] ${
                                    location.pathname === item.route && "w-full"
                                } transition-all duration-300 opacity-0 ${
                                    location.pathname === item.route && "opacity-100"
                                }`}
                            />
                        </div>
                    ))}
                    {localStorage.getItem("token") ? (
                        <button
                            className="bg-white py-3 px-6 rounded-[64px] active:scale-90 hover:shadow-[0_6px_32px_0px_rgba(220,12,126,0.35)] transition-all duration-300"
                            onClick={() => navigate(ROUTES.PROFILE)}
                        >
                            <p className="text-black text-lg font-medium">Профиль</p>
                        </button>
                    ) : (
                        <button
                            className="bg-white py-3 px-6 rounded-[64px] active:scale-90 hover:shadow-[0_6px_32px_0px_rgba(220,12,126,0.35)] transition-all duration-300"
                            onClick={() => navigate(ROUTES.LOGIN)}
                        >
                            <p className="text-black text-lg font-medium">Авторизация</p>
                        </button>
                    )}
                </div>
            </header>
            <header
                className="flex lg:hidden justify-between w-full items-center py-3 px-4 text-white fixed z-50"
                style={{
                    borderBottom: "1px solid #3A3A3A",
                    backdropFilter: "blur(6px)",
                    background: "rgba(0, 0, 0, 0.25)",
                    WebkitBackdropFilter: "blur(6px)",
                }}
            >
                <img
                    src="/fond.svg"
                    style={{ width: 71, height: 50, cursor: "pointer" }}
                    onClick={() => window.open("https://innovationfund14.ru/")}
                />

                <Menu placement="bottom-start">
                    <MenuHandler>
                        <img src="/icon/Menu.svg" />
                    </MenuHandler>
                    <MenuList className="bg-[#0A0A0A] text-white border-[1px] border-[#3A3A3A] backdrop-blur-sm bg-[#3A3A3A]/30">
                        {menuItems.map((item, index) => (
                            <div key={index}>
                                <MenuItem onClick={() => navigate(item.route)}>
                                    <p className="hover:text-[#DC1F81] text-lg font-medium transition ease-in-out">
                                        {item.label}
                                    </p>
                                </MenuItem>
                            </div>
                        ))}

                        <ApplicationModal />
                    </MenuList>
                </Menu>
            </header>
        </div>
    );
};
