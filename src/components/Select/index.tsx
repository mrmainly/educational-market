import React from "react";
import { Select as TailSelect, Option } from "@material-tailwind/react";
import { Controller } from "react-hook-form";

export const Select = ({
    name,
    label,
    required,
    options,
    control,
}: {
    label: string;
    name: any;
    required?: boolean;
    options?: { label: string; value: any }[];
    control: any;
}) => {
    return (
        <div>
            <label className="block mb-2 font-medium md:text-lg text-base">
                {label}
                {required && <span className="text-[#DC1F81]"> *</span>}
            </label>
            {options && (
                <Controller
                    render={({ field: { onChange, value } }) => (
                        <TailSelect
                            onChange={onChange}
                            value={value}
                            className="bg-[#ffffff0d] border border-[#3A3A3A] text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                            variant="standard"
                            animate={{
                                mount: { y: 0 },
                                unmount: { y: 25 },
                            }}
                        >
                            {options?.map((item, index) => (
                                <Option value={item?.value} key={index}>
                                    <p className="pl-2 pb-2">{item.label}</p>
                                </Option>
                            ))}
                        </TailSelect>
                    )}
                    name={name}
                    control={control}
                />
            )}
        </div>
    );
};
