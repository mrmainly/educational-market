import { useGetContactQuery } from "@/services";
import { toast } from "react-toastify";

export const Footer = () => {
    const { data } = useGetContactQuery(undefined);

    const copyTextToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success(text + " скопирован в буфере обмена");
        } catch (err) {
            console.error("Ошибка:", err);
        }
    };

    return (
        <div className="bg-[#0A0A0A] w-full" style={{ borderTop: "1px solid #3A3A3A" }}>
            <footer className="2xl:max-w-[1440px] 2xl:mx-auto xl:px-20 px-4 flex flex-col gap-y-4 py-6 text-white">
                {/* <div>
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-semibold ">Контакты</p>
                        <div
                            className="flex gap-x-2 items-center cursor-pointer"
                            onClick={() => window.open(data?.results[0]?.telegram)}
                        >
                            <p className="hidden sm:block">Теперь мы в Telegram!</p>
                            <img src="/icon/Telegram.svg" className="w-[48px] h-[48px]" />
                        </div>
                    </div>
                    <div className="text-lg opacity-50 flex gap-3 md:gap-9 flex-col md:flex-row">
                        <div
                            className="flex items-center gap-x-2 cursor-pointer"
                            onClick={() => copyTextToClipboard(data?.results[0]?.address)}
                        >
                            <p>{data?.results[0]?.address}</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_836_1526)">
                                    <path
                                        d="M3.24935 9.99967C3.24935 8.57467 4.40768 7.41634 5.83268 7.41634H9.16602V5.83301H5.83268C3.53268 5.83301 1.66602 7.69967 1.66602 9.99967C1.66602 12.2997 3.53268 14.1663 5.83268 14.1663H9.16602V12.583H5.83268C4.40768 12.583 3.24935 11.4247 3.24935 9.99967ZM6.66602 10.833H13.3327V9.16634H6.66602V10.833ZM14.166 5.83301H10.8327V7.41634H14.166C15.591 7.41634 16.7493 8.57467 16.7493 9.99967C16.7493 11.4247 15.591 12.583 14.166 12.583H10.8327V14.1663H14.166C16.466 14.1663 18.3327 12.2997 18.3327 9.99967C18.3327 7.69967 16.466 5.83301 14.166 5.83301Z"
                                        fill="#DC1F81"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_836_1526">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div
                            className="flex items-center gap-x-2 cursor-pointer"
                            onClick={() => copyTextToClipboard(data?.results[0]?.phone)}
                        >
                            <p>{data?.results[0]?.phone}</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_836_1526)">
                                    <path
                                        d="M3.24935 9.99967C3.24935 8.57467 4.40768 7.41634 5.83268 7.41634H9.16602V5.83301H5.83268C3.53268 5.83301 1.66602 7.69967 1.66602 9.99967C1.66602 12.2997 3.53268 14.1663 5.83268 14.1663H9.16602V12.583H5.83268C4.40768 12.583 3.24935 11.4247 3.24935 9.99967ZM6.66602 10.833H13.3327V9.16634H6.66602V10.833ZM14.166 5.83301H10.8327V7.41634H14.166C15.591 7.41634 16.7493 8.57467 16.7493 9.99967C16.7493 11.4247 15.591 12.583 14.166 12.583H10.8327V14.1663H14.166C16.466 14.1663 18.3327 12.2997 18.3327 9.99967C18.3327 7.69967 16.466 5.83301 14.166 5.83301Z"
                                        fill="#DC1F81"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_836_1526">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div
                            className="flex items-center gap-x-2 cursor-pointer"
                            onClick={() => copyTextToClipboard(data?.results[0]?.email)}
                        >
                            <p>{data?.results[0]?.email}</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_836_1526)">
                                    <path
                                        d="M3.24935 9.99967C3.24935 8.57467 4.40768 7.41634 5.83268 7.41634H9.16602V5.83301H5.83268C3.53268 5.83301 1.66602 7.69967 1.66602 9.99967C1.66602 12.2997 3.53268 14.1663 5.83268 14.1663H9.16602V12.583H5.83268C4.40768 12.583 3.24935 11.4247 3.24935 9.99967ZM6.66602 10.833H13.3327V9.16634H6.66602V10.833ZM14.166 5.83301H10.8327V7.41634H14.166C15.591 7.41634 16.7493 8.57467 16.7493 9.99967C16.7493 11.4247 15.591 12.583 14.166 12.583H10.8327V14.1663H14.166C16.466 14.1663 18.3327 12.2997 18.3327 9.99967C18.3327 7.69967 16.466 5.83301 14.166 5.83301Z"
                                        fill="#DC1F81"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_836_1526">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div> */}
                {/* <div className="bg-[#3A3A3A] w-full h-[1px]" /> */}
                <div className="text-lg opacity-50 flex gap-9">
                    <p>© {data?.results[0]?.year}. Все права защищены</p>
                </div>
            </footer>
        </div>
    );
};
