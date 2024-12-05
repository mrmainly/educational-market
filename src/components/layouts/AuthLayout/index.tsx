import { ROUTES } from "@/constans";
import { useNavigate } from "react-router-dom";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row h-[100vh] items-center bg-[#0A0A0A] text-white overflow-hidden relative">
            <div
                onClick={() => navigate(ROUTES.PROJECTS)}
                className="absolute h-[50px] w-[50px] bg-gradient-to-r from-[#4743FF] cursor-pointer to-[#E4178A] rounded-full hover:shadow-[0_6px_32px_0px_rgba(220,12,126,0.35)] top-10 left-10 flex items-center justify-center "
            >
                <svg
                    style={{ transform: "rotate(180deg)" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="16"
                    viewBox="0 0 61 16"
                    fill="none"
                    className="hidden md:block"
                >
                    <path
                        d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3431 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3431 15.0711L60.7071 8.70711ZM0 9H60V7H0V9Z"
                        className="fill-white transition-all w-[31px] h-[16px]"
                    />
                </svg>
            </div>
            <div className="project-top-spots" />
            <div className="spots-project-left" />
            <div className="flex-1 flex justify-center">{children}</div>
            <div className="flex-1">
                <img src={"/iot.webp"} style={{ height: "100vh", objectFit: "cover" }} />
            </div>
        </div>
    );
};
