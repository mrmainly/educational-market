import { ROUTES } from "@/constans";
import { useNavigate } from "react-router-dom";

export const MyProjectCard = () => {
    const navigate = useNavigate();

    return (
        <div
            className="p-4 flex gap-x-4 rounded-[20px] cursor-pointer relative"
            style={{ background: "rgba(0, 0, 0, 0.25)", border: "1px solid #3A3A3A" }}
            onClick={() => navigate(ROUTES.MY_PROJECT + "/" + 1)}
        >
            <img src={"/img/tepl.jpg"} className="w-[200px]" />
            <div className="flex flex-col gap-y-2">
                <div>УМНАЯ ТЕПЛИЦА</div>

                <div>
                    Погрузитесь в мир современных технологий с нашим уникальным обучающим набором 'Умная теплица'! Этот
                    комплект идеально подходит как для начинающих, так и для опытных энтузиастов, желающих освоить
                    основы Интернета вещей (IoT) и автоматизации
                </div>
            </div>
        </div>
    );
};
