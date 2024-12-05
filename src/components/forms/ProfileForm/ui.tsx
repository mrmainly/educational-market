import { Input, Button } from "@/components";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constans";

export const ProfileForm = () => {
    return (
        <div
            className="md:p-8 p-4 flex flex-col gap-y-6  rounded-[20px] z-10 w-[500px]"
            style={{ border: "1px solid #3A3A3A" }}
        >
            <form className="flex flex-col gap-y-6">
                <div className="text-[24px] text-center">Профиль</div>
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

                    <Button className="w-full" type="submit">
                        Сохранить
                    </Button>
                </div>
            </form>
        </div>
    );
};