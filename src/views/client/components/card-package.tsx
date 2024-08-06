import { Badge } from "../../../design-system/badge.tsx";
import {Typography} from "../../../design-system/typography.tsx";

interface CardPackageProps {
    title: string;
    subtitle: string;
    price: string;
    allergen: string
    onClick?: () => void;
}

export default function CardPackage({title, subtitle, price, allergen, onClick }: CardPackageProps) {
    return (
        <>
            {/* Be sure to use this with a layout container that is full-width on mobile */}
            <div className="overflow-hidden bg-gray-100 shadow sm:rounded-lg py-3" onClick={onClick}>
                <div className="flex items-center justify-between gap-2 px-5 py-4 sm:p-6">
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
                            children={subtitle}
                        />
                        <div className="flex gap-2.5">
                            <Badge 
                                children={allergen}
                                variant="yellow"
                            />
                        </div>
                    </div>
                    <Typography
                        variant="h3"
                        component="p"
                        children={price}
                    />
                </div>
            </div>
        </>
    )
}
