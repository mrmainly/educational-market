import { IconButton } from "@material-tailwind/react";

export const Pagination = ({
    count,
    page,
    pageSize,
    setPage,
}: {
    count?: number;
    page: number;
    pageSize: number;
    setPage: any;
}) => {
    // const getItemProps = (index) =>
    //     ({
    //         variant: active === index ? "filled" : "text",
    //         color: "gray",
    //         onClick: () => setActive(index),
    //     } as any);

    const countPage = Math.ceil(count! / pageSize);

    if (countPage > 1) {
        return (
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-white">
                    {Array(countPage)
                        ?.fill(0)
                        .map((item, index) => (
                            <IconButton
                                key={index}
                                onClick={() => {
                                    setPage(index + 1);
                                    window.scrollTo(0, 0);
                                }}
                                className={`border-[1px] text-xl bg-[#0A0A0A] ${
                                    index + 1 === page ? "border-[#DC1F81]" : "border-[#0A0A0A]"
                                } rounded-[8px] flex justify-center items-center cursor-pointer transition-all duration-300`}
                            >
                                {index + 1}
                            </IconButton>
                        ))}
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};
