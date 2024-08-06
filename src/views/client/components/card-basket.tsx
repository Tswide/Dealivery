import { Badge } from "../../../design-system/badge.tsx";
import { Typography } from "../../../design-system/typography.tsx";

interface CardBasketProps {
    title: string;
    removed: string;
    price: string;
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onDelete: () => void;
}

export default function CardBasket({ title, removed, price, count, onIncrement, onDecrement, onDelete }: CardBasketProps) {
    return (
        <div className="overflow-hidden bg-yellow-200 shadow sm:rounded-lg py-3 mb-4">
            <div className="flex items-center justify-between gap-2 px-5 py-4 sm:p-3">
                <div className="flex flex-col gap-2">
                    <Typography
                        variant="h3"
                        component="h3"
                        children={title}
                    />
                    <Typography
                        variant="body-sm"
                        component="p"
                        theme="gray"
                        children={removed}
                    />
                    <div className="flex gap-2.5 items-center">
                        <button onClick={onDecrement} className="px-4 py-1 bg-red-200 text-gray rounded">-</button>
                        <Badge children={count} />
                        <button onClick={onIncrement} className="px-4 py-1 bg-primary text-gray rounded">+</button>
                    </div>
                </div>
                <Typography
                    variant="h3"
                    component="p"
                    children={price}
                />
                <button onClick={onDelete} className="px-2 py-1 bg-red-500 text-white rounded">X</button>
            </div>
        </div>
    );
}
