import { Checkbox } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Input, Button } from "@/components";
import { ROUTES } from "@/constans";
import { useState } from "react";

export const LoginForm = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onFinish = async () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            localStorage.setItem("token", "19a756ec867f76adfedb5eccd160232a349cae27");
            navigate(ROUTES.PROFILE);
        }, 1000);
    };

    return (
        <div
            className="md:p-8 p-4 flex flex-col gap-y-6  rounded-[20px] z-10 w-[500px]"
            style={{ border: "1px solid #3A3A3A" }}
        >
            <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onFinish)}>
                <div className="text-[24px] text-center">Авторизация</div>
                <div className={`grid gap-6  md:grid-cols-1`}>
                    <Input
                        register={register}
                        label="Номер телефона"
                        placeholder="Введите номер телефона"
                        name="phone"
                        required
                        type="number"
                    />
                    <Input
                        register={register}
                        label="Пароль"
                        placeholder="Введите пароль"
                        name="password"
                        required
                        type="password"
                    />
                    <div className="flex justify-between items-center">
                        <Checkbox
                            crossOrigin={{}}
                            name="asd"
                            label={<div style={{ color: "white" }}>Запомнить меня</div>}
                        />
                        <Link
                            to={ROUTES.REGISTRATION}
                            className="hover:text-[#DC1F81] text-base font-medium transition ease-in-out"
                        >
                            Регистрация
                        </Link>
                    </div>
                    <Button className="w-full" type="submit" loading={loading}>
                        Войти
                    </Button>
                </div>
            </form>
        </div>
    );
};
