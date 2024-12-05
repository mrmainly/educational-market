import { Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { usePostApplicationMutation } from "@/services";
import { Button } from "../Button";
import { ApplicationForm } from "../ApplicationForm";
import { CheckboxPersonalData } from "../CheckboxPersonalData";

export const ApplicationModal = () => {
    const [onApplication, { isLoading }] = usePostApplicationMutation();

    const [agree, setAgree] = useState(false);
    const [open, setOpen] = useState(false);

    const { register, handleSubmit, control, reset } = useForm();

    const handleOpen = () => setOpen(!open);

    const onChange = (e: any) => {
        setAgree(e.target.checked);
    };

    const onFinish = (data: any) => {
        const formData = new FormData();
        formData.append("full_name", data.full_name);
        formData.append("organisation", data.organisation);
        formData.append("inn", data.inn);
        formData.append("email", data.email);
        data.application_file[0] && formData.append("application_file", data.application_file[0]);
        data?.comment && formData.append("comment", data?.comment);

        onApplication(formData)
            .unwrap()
            .then(() => {
                toast.success("Заявка отправлена");
                handleOpen();
                reset();
            })
            .catch(() => toast.error("Проблемы с соединением"));
    };

    return (
        <>
            <button
                className="bg-white py-3 px-6 rounded-[64px] active:scale-90 hover:shadow-[0_6px_32px_0px_rgba(220,12,126,0.35)] transition-all duration-300"
                onClick={handleOpen}
            >
                <p className="text-black text-lg font-medium">Оставить заявку</p>
            </button>
            <Dialog open={open} handler={handleOpen} className="bg-[#0A0A0A]">
                <div
                    className="flex justify-between items-center py-4 px-8"
                    style={{ borderBottom: "1px solid #3A3A3A" }}
                >
                    <p className="text-xl font-bold text-white">Оставить заявку</p>
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
                <DialogBody className="text-white px-8">
                    <form className="flex flex-col gap-y-6" id="form-application" onSubmit={handleSubmit(onFinish)}>
                        <ApplicationForm register={register} control={control} grid={1} />
                    </form>
                </DialogBody>
                <div className="flex justify-between items-center py-4 px-8" style={{ borderTop: "1px solid #3A3A3A" }}>
                    <Button
                        className="sm:w-max w-full"
                        type="submit"
                        form="form-application"
                        loading={isLoading}
                        disabled={!agree}
                    >
                        Отправить
                    </Button>
                    <CheckboxPersonalData value={agree} onChange={onChange} />
                </div>
            </Dialog>
        </>
    );
};
