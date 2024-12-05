export const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex gap-x-3 lg:gap-x-6 items-center">
            <img src="/icon/Rectangle.svg" className="md:w-[22px] w-[10px] md:h-[56px] h-[28px]" />
            <p className="lg:text-5xl md:text-4xl text-xl font-bold uppercase">{children}</p>
        </div>
    );
};
