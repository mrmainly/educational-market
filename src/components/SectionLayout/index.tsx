export const SectionLayout = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={"relative " + className}>
            <div className="2xl:max-w-[1440px] 2xl:mx-auto xl:px-20 px-4">{children}</div>
        </div>
    );
};
