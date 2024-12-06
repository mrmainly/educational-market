import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { projectList } from "@/mocks";
import { Input } from "../Input";
import { projectSelectors } from "@/reducers";

export const ModalPay = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const basketList = useSelector(projectSelectors.getBasketList);

    return (
        <div>
            <Button onClick={handleOpen}>Оформить</Button>
            <Dialog open={open} handler={handleOpen} className="bg-[#0A0A0A]">
                <div
                    className="flex justify-between items-center py-4 px-8"
                    style={{ borderBottom: "1px solid #3A3A3A" }}
                >
                    <p className="text-xl font-bold text-white">Оформить</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        className="cursor-pointer group/item"
                        onClick={handleOpen}
                    >
                        <g clipPath="url(#clip0_221_5028)">
                            <path
                                d="M25.3337 8.54699L23.4537 6.66699L16.0003 14.1203L8.54699 6.66699L6.66699 8.54699L14.1203 16.0003L6.66699 23.4537L8.54699 25.3337L16.0003 17.8803L23.4537 25.3337L25.3337 23.4537L17.8803 16.0003L25.3337 8.54699Z"
                                fill="white"
                                className="group-hover/item:fill-[#DC1F81] transition-all"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_221_5028">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <DialogBody className="text-white px-8 flex flex-col gap-y-4">
                    <div>
                        {projectList
                            .filter(
                                (fItem) =>
                                    fItem.id === basketList.find((item) => item.projectId === fItem.id)?.projectId
                            )
                            .map((item) => (
                                <div>
                                    <div>
                                        {item.title}: {item.price}рб,{" "}
                                        {basketList.find((fItem) => fItem.projectId === item.id)?.count}шт (общая
                                        стоимость{" "}
                                        {basketList.length
                                            ? item.price *
                                              basketList?.find((fItem) => fItem.projectId === item.id)?.count
                                            : 0}
                                        рб)
                                    </div>
                                </div>
                            ))}
                    </div>
                    <form className="flex flex-col gap-y-6" id="form-application">
                        <div className={`grid gap-6  md:grid-cols-${2}`}>
                            {/* <Input label="ФИО" required name="full_name" placeholder="Введите ФИО" /> */}
                            <Input
                                label="Email"
                                type="email"
                                required
                                name="номер телефона"
                                placeholder="Введите email"
                            />
                            <Input
                                label="Номер телефона"
                                type="email"
                                required
                                name="email"
                                placeholder="Введите email"
                            />
                            <div
                                className="flex flex-col gap-4 p-4 rounded-[20px]"
                                style={{ background: "rgba(0, 0, 0, 0.25)", border: "1px solid #3A3A3A" }}
                            >
                                <Input
                                    label="Номер карты"
                                    required
                                    name="full_name"
                                    placeholder="1111 1111 1111 1111"
                                />
                                <div className="flex gap-x-4">
                                    <Input label="CVC" required name="full_name" placeholder="111" />
                                    <Input
                                        label="DATE"
                                        required
                                        name="full_name"
                                        placeholder="10/33"
                                        className="flex-1"
                                    />
                                </div>
                                <Input
                                    label="NAME"
                                    required
                                    name="full_name"
                                    placeholder="EVERSTOV ERNEST"
                                    className="flex-1"
                                />
                            </div>
                        </div>
                    </form>
                </DialogBody>
                <div className="flex justify-between items-center py-4 px-8" style={{ borderTop: "1px solid #3A3A3A" }}>
                    <Button className="sm:w-max w-full" type="submit" form="form-application">
                        Оформить
                    </Button>
                </div>
            </Dialog>
        </div>
    );
};
