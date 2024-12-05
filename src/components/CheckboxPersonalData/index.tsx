import { Checkbox } from "@material-tailwind/react";
import { useGetDocumentsQuery } from "@/services";

export const CheckboxPersonalData = ({ value, onChange }: { value: any; onChange: any }) => {
    const { data } = useGetDocumentsQuery({ is_main: true });

    return (
        <div className="flex flex-row items-center">
            <Checkbox color="pink" crossOrigin={undefined} value={value} onChange={onChange} />
            <a className="text-lg font-medium text-whit ">
                Согласие с{" "}
                <span className="text-[#DC1F81] cursor-pointer underline">обработкой персональных данных</span>
            </a>
        </div>
    );
};
