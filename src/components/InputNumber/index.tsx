type InputProps = {
    label: string;
    register?: any;
    required: boolean;
    name: string;
    className?: string;
    placeholder?: string;
    type?: string;
    accept?: string;
    maxLength?: string;
};

export const InputNumber = ({
    label,
    register,
    name,
    required,
    className,
    placeholder,
    type,
    accept,
    maxLength,
}: InputProps) => {
    return (
        <div className={className}>
            <label className="block mb-2 font-medium md:text-lg text-base">
                {label}
                {required && <span className="text-[#DC1F81]"> *</span>}
            </label>
            <input
                maxLength={maxLength}
                type="number"
                onInput={(e) => {
                    //@ts-ignore
                    if (e.target.value.length > e.target.maxLength)
                        //@ts-ignore
                        e.target.value = e.target.value.slice(0, e.target.maxLength);
                }}
                accept={accept}
                {...register?.(name, { required })}
                placeholder={placeholder}
                className="bg-[#ffffff0d] border border-[#3A3A3A] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    );
};
