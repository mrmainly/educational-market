import { Link } from "react-router-dom";

import { Input, Button } from "@/components";
import { ROUTES } from "@/constans";

export const RegistrationForm = () => {
    return (
        <div
            className="md:p-8 p-4 flex flex-col gap-y-6  rounded-[20px] z-10 w-[500px]"
            style={{ border: "1px solid #3A3A3A" }}
        >
            <form className="flex flex-col gap-y-6">
                <div className="text-[24px] text-center">Регистрация</div>
                <div className={`grid gap-6  md:grid-cols-1`}>
                    <Input label="ФИО" placeholder="Введите ФИО" name="phone" type="number" required />
                    <Input label="E-mail" placeholder="Введите e-mail" name="phone" type="number" required />
                    <Input
                        label="Номер телефона"
                        placeholder="Введите номер телефона"
                        name="phone"
                        type="number"
                        required
                    />
                    <Input label="Пароль" placeholder="Введите пароль" name="password" type="password" required />
                    <Input
                        label="Повторите Пароль"
                        placeholder="Введите пароль"
                        name="password"
                        type="password"
                        required
                    />
                    <div className="flex justify-end items-center">
                        <Link
                            to={ROUTES.LOGIN}
                            className="hover:text-[#DC1F81] text-base font-medium transition ease-in-out"
                        >
                            Авторизация
                        </Link>
                    </div>
                    <Button className="w-full" type="submit">
                        Сохранить
                    </Button>
                </div>
            </form>
        </div>
    );
};
