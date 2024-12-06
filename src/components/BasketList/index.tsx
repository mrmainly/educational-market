import { ROUTES } from "@/constans";
import { projectList } from "@/mocks";
import { projectSelectors } from "@/reducers";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

export const BasketList = () => {
    const basketList = useSelector(projectSelectors.getBasketList);

    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-y-4">
            {projectList
                .filter((fItem) => fItem.id === basketList.find((item) => item.projectId === fItem.id)?.projectId)
                .map((item) => (
                    <div
                        className="p-4 flex gap-x-4 rounded-[20px] cursor-pointer relative"
                        style={{ background: "rgba(0, 0, 0, 0.25)", border: "1px solid #3A3A3A" }}
                        onClick={() => navigate(ROUTES.PROJECTS + "/" + item.id)}
                    >
                        <img src={item.image} className="w-[200px]" />
                        <div className="flex flex-col gap-y-2">
                            <div>{item.title}</div>
                            <div>{basketList.find((fItem) => fItem.projectId === item.id)?.count} шт</div>
                            <div>{item.description}</div>
                        </div>
                    </div>
                )) ?? "Корзина пуста"}
        </div>
    );
};
