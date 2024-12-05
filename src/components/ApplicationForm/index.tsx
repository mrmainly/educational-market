import { useGetProjectQuery } from "@/services";

import { Input } from "../Input";
import { Select } from "../Select";
import { TextArea } from "../TextArea";
import { InputNumber } from "../InputNumber";

export const ApplicationForm = ({ register, control, grid = 2 }: { register: any; control: any; grid?: number }) => {
    const { data } = useGetProjectQuery({ page: 1, pageSize: 1000, status: 2 });

    return (
        <div className="flex flex-col gap-y-6">
            <div className={`grid gap-6  md:grid-cols-${grid}`}>
                <Input label="ФИО" required register={register} name="full_name" placeholder="Введите ФИО" />

                <Input
                    label="Email"
                    type="email"
                    required
                    register={register}
                    name="email"
                    placeholder="Введите email"
                />
            </div>
            <TextArea
                label="Комментарий"
                required={false}
                register={register}
                name="comment"
                placeholder="Введите комментарий"
            />
        </div>
    );
};
