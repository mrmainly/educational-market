import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { SectionLayout, Breadcrumb } from "@/components";
import { useGetDetailProjectQuery } from "@/services/projectService";
import { ROUTES } from "@/constans";

import { projectDTO, projectList } from "@/mocks";
import "./index.css";
import { IconButton } from "@material-tailwind/react";
import { projectModel, projectSelectors } from "@/reducers";

export const ProjectDetailInfo = ({ basketShow = true }: { basketShow?: boolean }) => {
    const basketList = useSelector(projectSelectors.getBasketList);
    const { id } = useParams();
    const currentProject = projectList.find((item) => item.id === Number(id));

    const [basketCount, setBasketCount] = useState(
        basketList?.find((item) => item.projectId === currentProject?.id)?.count || 0
    );

    const maxCount = 5;

    const { data, isLoading } = useGetDetailProjectQuery({ id: id });

    const dispatch = useDispatch();

    const onClick = () => {
        if (basketCount !== maxCount) {
            setBasketCount(basketCount + 1);
            if (basketCount === 0) {
                dispatch(projectModel.setBasketList([...basketList, { projectId: currentProject?.id, count: 1 }]));
            } else {
                dispatch(
                    projectModel.setBasketList(
                        basketList.map((item) => ({
                            projectId: item.projectId,
                            count: item.projectId === currentProject?.id ? basketCount + 1 : item.count,
                        }))
                    )
                );
            }
        }
    };

    const onDelete = () => {
        if (basketCount !== 0) {
            setBasketCount(basketCount - 1);
            dispatch(
                projectModel.setBasketList(
                    basketList.map((item) => ({
                        projectId: item.projectId,
                        count: item.projectId === currentProject?.id ? basketCount - 1 : item.count,
                    }))
                )
            );
        }
    };

    // useEffect(() => {
    //     setBasketCount();
    // }, []);

    return (
        <SectionLayout>
            <Breadcrumb
                pages={[
                    { label: "Главная", route: ROUTES.MAIN },
                    { label: "Образовательные наборы", route: ROUTES.PROJECTS },
                    { label: currentProject?.title, main: true },
                ]}
            />
            {isLoading ? (
                <Skeleton
                    className="w-full h-[468px]"
                    containerClassName="flex-1 h-full"
                    baseColor={"#323232"}
                    highlightColor={"#202020"}
                    enableAnimation
                />
            ) : (
                <div>
                    <div className="spots-top" />
                    <div className="flex flex-col md:flex-row md:gap-5 gap-4 ">
                        <img
                            src={currentProject?.image}
                            className="sm:h-[400px] h-[260px] w-full md:w-[468px] rounded-[24px] object-cover"
                        />

                        <div className="flex flex-col gap-y-5">
                            <p className="lg:text-5xl font-bold text-3xl">{currentProject?.title}</p>

                            <p className="lg:text-xl text-base">{currentProject?.description}</p>

                            <div>Цена: {currentProject?.price} рб</div>

                            {!basketShow && <div>Набор в пути</div>}
                            {basketShow && (
                                <div className="flex gap-x-4 items-center">
                                    Добавить в корзину{" "}
                                    <IconButton size="sm" onClick={onClick}>
                                        +
                                    </IconButton>{" "}
                                    {basketCount} / {maxCount}{" "}
                                    <IconButton size="sm" onClick={onDelete}>
                                        -
                                    </IconButton>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </SectionLayout>
    );
};
