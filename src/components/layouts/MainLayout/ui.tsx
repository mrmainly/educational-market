import { useOutlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Header } from "../../Header";
import { Footer } from "../../Footer";

export const MainLayout = () => {
    const outlet = useOutlet();

    return (
        <div>
            <ToastContainer />

            <div className="flex flex-col items-center bg-[#0A0A0A]">
                <Header />
                <div className="text-white overflow-clip w-full min-h-screen">{outlet}</div>
                <Footer />
            </div>
        </div>
    );
};
