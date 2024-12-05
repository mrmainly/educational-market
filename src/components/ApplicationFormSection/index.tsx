import { useForm } from "react-hook-form";
import { useState } from "react";

import { usePostApplicationMutation } from "@/services";
import { SectionLayout } from "../SectionLayout";

import { Button } from "../Button";
import { ApplicationForm } from "../ApplicationForm";
import { CheckboxPersonalData } from "../CheckboxPersonalData";

import "./index.css";
import { toast } from "react-toastify";

export const ApplicationFormSection = () => {
    const [agree, setAgree] = useState(false);
    const [onApplication, { isLoading }] = usePostApplicationMutation();

    const { register, handleSubmit, control, reset } = useForm();

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
                reset();
            })
            .catch(() => toast.error("Проблемы с соединением"));
    };

    const onChange = (e: any) => {
        setAgree(e.target.checked);
    };

    return (
        <SectionLayout className="mb-[100px] md:mt-[160px] sm:mt-[100px] mt-[64px]">
            <div className="spots-bottom" />
            <div className="spots-right" />
            <div className="flex flex-col gap-y-5">
                <p className="lg:text-[64px] sm:text-[48px] text-[20px] text-center font-bold lg:leading-[80px] sm:leading-[48px] leading-[28px] appearance">
                    Заполните форму и <span className="text-[#DC1F81]">мы вернемся к вам с обратной связью</span>
                </p>
                <div
                    className="md:p-8 p-4 flex flex-col gap-y-6 rounded-[20px] z-10"
                    style={{ border: "1px solid #3A3A3A", background: "rgba(0, 0, 0, 0.25)" }}
                >
                    <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onFinish)}>
                        <ApplicationForm register={register} control={control} />
                        <CheckboxPersonalData value={agree} onChange={onChange} />
                        <Button className="sm:w-max w-full" type="submit" loading={isLoading} disabled={!agree}>
                            Отправить
                        </Button>
                    </form>
                </div>
            </div>
        </SectionLayout>
    );
};
