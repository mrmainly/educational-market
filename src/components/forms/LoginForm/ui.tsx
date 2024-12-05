import { Checkbox } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Input, Button } from "@/components";
import { ROUTES } from "@/constans";

export const LoginForm = () => {
    const navigate = useNavigate();

    return (
        <div
            className="md:p-8 p-4 flex flex-col gap-y-6  rounded-[20px] z-10 w-[500px]"
            style={{ border: "1px solid #3A3A3A" }}
        >
            <form className="flex flex-col gap-y-6">
                <div className="text-[24px] text-center">Авторизация</div>
                <div className={`grid gap-6  md:grid-cols-1`}>
                    <Input label="Номер телефона" placeholder="Введите номер телефона" name="phone" type="number" />
                    <Input label="Пароль" placeholder="Введите пароль" name="password" type="password" />
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
                    <Button className="w-full" type="submit" onClick={() => navigate(ROUTES.PROFILE)}>
                        Войти
                    </Button>
                </div>
            </form>
        </div>
    );
};
