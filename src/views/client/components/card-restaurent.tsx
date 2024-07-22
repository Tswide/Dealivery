import {Typography} from "../../../design-system/typography.tsx";
import { BookmarkIcon } from '@heroicons/react/24/outline';

interface CardMenuProps {
    title: string;
    subtitle: string;
    timeAsk: string;
    timeLivery: string;
}

export default function CardRestaurent({title, subtitle, timeAsk,  timeLivery}: CardMenuProps) {
    return (
        <>
            {/* Be sure to use this with a layout container that is full-width on mobile */}
            <div className="overflow-hidden bg-gray-100 shadow sm:rounded-lg py-3">
                <div className="flex items-center justify-between px-4 py-5 sm:p-6">
                    <div className="flex flex-col gap-2">
                        <Typography
                            variant="h1"
                            component="h1"
                            children={title}
                        />
                        <Typography
                            variant="body-base"
                            component="h1"
                            children={subtitle}
                        />
                        <div className="flex gap-2.5">
                            <div
                                className="relative border-2 inline-flex items-center gap-x-1.5 px-1 text-badge font-semibold text-gray-900 focus:z-10 bg-green-100"
                            >
                                <BookmarkIcon aria-hidden="true" className="h-4 w-4 text-gray-400"/>
                                {timeAsk}
                            </div>
                            <div
                                className="relative border-2 inline-flex items-center gap-x-1.5 px-1 text-badge font-semibold text-gray-900 focus:z-10 bg-green-100"
                            >
                                <BookmarkIcon aria-hidden="true" className="h-4 w-4 text-gray-400"/>
                                {timeLivery}
                            </div>
                        </div>
                    </div>
                    <BookmarkIcon
                        aria-hidden="true"
                        className="h-6 w-6"
                    />
                </div>
            </div>
        </>
    )
}
