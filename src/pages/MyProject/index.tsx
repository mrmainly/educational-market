import { ProfileLayout } from "@/components";
import { MyProjectCard } from "@/components/MyProjectCard";

export const MyProjectPage = () => {
    return (
        <ProfileLayout>
            <div className="flex flex-col gap-y-4">
                <div className="text-lg font-bold">Купленные наборы</div>
                <MyProjectCard />
            </div>
        </ProfileLayout>
    );
};
