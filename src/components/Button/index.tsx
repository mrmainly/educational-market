import { Button as TailButton } from "@material-tailwind/react";

export const Button = ({
    children,
    className,
    onClick,
    type,
    loading,
    form,
    disabled,
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "submit" | "reset" | "button" | undefined;
    loading?: boolean;
    form?: string;
    disabled?: boolean;
}) => {
    return (
        <div
            className={`${
                !disabled && "hover:shadow-[0_6px_32px_0px_rgba(220,12,126,0.35)]"
            } rounded-[64px] transition-all duration-300 h-max `}
        >
            <TailButton
                type={type}
                // style={{
                //     boxShadow: "0px 8px 16px 0px rgba(205, 63, 255, 0.25)",
                // }}
                loading={loading}
                form={form}
                disabled={disabled}
                className={
                    "rounded-[64px] py-3 px-6 xl:py-4 xl:px-8 bg-gradient-to-r from-[#4743FF] to-[#E4178A] text-white sm:text-lg text-base normal-case font-medium " +
                    className
                }
                onClick={onClick}
            >
                {children}
            </TailButton>
        </div>
    );
};
