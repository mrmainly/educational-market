import { Link } from "react-router-dom";

import { Breadcrumbs } from "@material-tailwind/react";

export const Breadcrumb = ({
    pages,
}: {
    pages: {
        label?: string;
        route?: string;
        main?: boolean;
    }[];
}) => {
    return (
        <Breadcrumbs
            className="bg-[#0A0A0A] flex mb-[44px] p-0 z-20"
            separator={<div className="mx-2 text-lg font-medium">/</div>}
        >
            {pages?.map((item, index) => (
                <div key={index}>
                    {item.main ? (
                        <p className="text-white text-lg font-medium cursor-text">{item.label}</p>
                    ) : (
                        <Link
                            to={item.route!}
                            className="opacity-60 text-white text-lg font-medium hover:text-[#DC1F81] hover:opacity-100 transition-all"
                        >
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </Breadcrumbs>
    );
};
