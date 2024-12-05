import { useForm } from "react-hook-form";
import { useState } from "react";
import { usePostFeedbackMutation } from "@/services";

import { SectionLayout } from "../SectionLayout";
import { Title } from "../Title";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import { CheckboxPersonalData } from "../CheckboxPersonalData";

import "./index.css";
import { toast } from "react-toastify";

export const ContactsForm = () => {
    const [onFeedback, { isLoading }] = usePostFeedbackMutation();

    const [agree, setAgree] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const onChange = (e: any) => {
        setAgree(e.target.checked);
    };

    const onFinish = (data: any) => {
        onFeedback(data)
            .unwrap()
            .then(() => {
                toast.success("Заявка отправлена");
                reset();
            })
            .catch(() => toast.error("Проблемы с соединением"));
    };

    return (
        <SectionLayout className="mt-[124px] mb-[100px]">
            <div className="spots-bottom" />
            <div className="flex flex-col gap-y-[32px]">
                <Title>Остались вопросы? Заполните форму и мы вернемся с обратной связью</Title>
                <div
                    className="md:p-8 p-4 flex flex-col gap-y-6  rounded-[20px] z-10"
                    style={{ border: "1px solid #3A3A3A", background: "rgba(0, 0, 0, 0.25)" }}
                >
                    {/* <p className="md:text-[28px] text-[20px] font-semibold">
                       
                    </p> */}
                    <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onFinish)}>
                        <Input label="ФИО" required register={register} name="full_name" placeholder="Введите ФИО" />

                        <Input
                            label="Email"
                            type="email"
                            required
                            register={register}
                            name="email"
                            placeholder="Введите email"
                        />
                        <TextArea
                            label="Комментарий"
                            required={false}
                            register={register}
                            name="comment"
                            placeholder="Введите комментарий"
                        />
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
