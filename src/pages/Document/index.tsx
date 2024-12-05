import { SectionLayout, ApplicationFormSection, Breadcrumb, DocumentCardSkeleton } from "@/components";
import { useGetDocumentsQuery } from "@/services";
import { ROUTES } from "@/constans";

export const DocumentPage = () => {
    const { data, isLoading } = useGetDocumentsQuery({ page: 1, pageSize: 10000 });

    return (
        <div className="pt-[124px]">
            <SectionLayout>
                <Breadcrumb
                    pages={[
                        { label: "Главная", route: ROUTES.MAIN },
                        { label: "Документация", main: true },
                    ]}
                />
                <div className="flex flex-col gap-y-4">
                    {isLoading ? (
                        <>
                            <DocumentCardSkeleton />
                            <DocumentCardSkeleton />
                            <DocumentCardSkeleton />
                            <DocumentCardSkeleton />
                        </>
                    ) : (
                        data?.results?.map((item: any, index: number) => (
                            <div
                                className="flex justify-between md:p-6 p-4 items-center bg-[#1E1E1E] rounded-[20px] relative border border-[#1E1E1E] "
                                key={index}
                            >
                                <img src="/img/Noise.png" className="absolute w-full h-full left-0 z-0" />
                                <div className="flex flex-col md:gap-y-3 gap-y-1 z-10 overflow-hidden ">
                                    <a
                                        className="truncate md:text-[28px] text-[20px] font-semibold text-wrap cursor-pointer hover:text-[#DC1F81] transition-all"
                                        href={item?.document_file}
                                    >
                                        {item?.name}
                                    </a>
                                    <p className="md:text-xl text-base">{item?.description}</p>
                                </div>
                                <a className="cursor-pointer z-10" href={item?.document_file}>
                                    <img
                                        src="/icon/Download.svg"
                                        className="z-10 md:h-[48px] md:w-[48px] h-[36px] w-[36px]"
                                    />
                                </a>
                            </div>
                        ))
                    )}
                </div>
            </SectionLayout>
            <ApplicationFormSection />
        </div>
    );
};
