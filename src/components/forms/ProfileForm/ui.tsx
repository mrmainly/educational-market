import { useForm } from "react-hook-form";
import { useState } from "react";

import { Input, Button } from "@/components";

export const ProfileForm = () => {
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            firstName: localStorage.getItem("firstName") || "Эрнест",
            secondName: "Эверстов",
            patronomic: "Викторович",
            email: "ernest_everstov@mail.ru",
            phone: "891423545628",
        },
    });

    const onFinish = (data: any) => {
        localStorage.setItem("firstName", data.firstName);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return (
        <div
            className="md:p-8 p-4 flex flex-col gap-y-6  rounded-[20px] z-10 w-[500px]"
            style={{ border: "1px solid #3A3A3A" }}
        >
            <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onFinish)}>
                <div className="text-[24px] text-center">Профиль</div>
                <div className={`grid gap-6  md:grid-cols-1`}>
                    <Input label="Имя" placeholder="Введите ФИО" name="firstName" register={register} required />
                    <Input label="Фамилия" placeholder="Введите ФИО" name="secondName" register={register} required />
                    <Input label="Отчество" placeholder="Введите ФИО" name="patronomic" register={register} required />
                    <Input label="E-mail" placeholder="Введите e-mail" name="email" register={register} required />

                    <Input
                        label="Номер телефона"
                        placeholder="Введите номер телефона"
                        name="phone"
                        type="number"
                        register={register}
                        required
                    />

                    <Button className="w-full" type="submit" loading={loading}>
                        Сохранить
                    </Button>
                </div>
            </form>
        </div>
    );
};
