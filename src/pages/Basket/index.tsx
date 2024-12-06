import { ProfileLayout, BasketList, ModalPay } from "@/components";

export const BasketPage = () => {
    return (
        <ProfileLayout>
            <div className="flex flex-col gap-y-4">
                <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">Корзина</div>
                    <ModalPay />
                </div>

                <BasketList />
            </div>
        </ProfileLayout>
    );
};
