import { FC } from 'react';
import { ShoppingBagIcon,  Cog6ToothIcon, QueueListIcon, UsersIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import classNames from "../../utils/classNames.tsx";

interface NavigationItem {
    name: string;
    href: string;
    icon: FC<{ className?: string }>;
    current?: boolean;
}

const navigation_top: NavigationItem[] = [
    { name: 'Menu', href: '/menu', icon: QueueListIcon, current: true },
    { name: 'Commande', href: '/order', icon: ShoppingBagIcon, current: false },
];

const navigation_bot: NavigationItem[] = [
    { name: 'Mon profil', href: '#', icon: UsersIcon },
    { name: 'Paramètres', href: '#', icon: Cog6ToothIcon },
    { name: 'Se déconnecter', href: '#', icon: ArrowRightEndOnRectangleIcon },
];


const Sidebar: FC = () => {
    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-24 shrink-0 items-center">
                <a href="/">
                    <img
                        alt="Your Company Small Logo"
                        src="/logo_dealivery.png"
                        className="h-10 w-auto block"
                    />
                </a>
            </div>
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {navigation_top.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600',
                                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                        )}
                                    >
                                        <item.icon
                                            aria-hidden="true"
                                            className={classNames(
                                                item.current ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-600',
                                                'h-6 w-6 shrink-0',
                                            )}
                                        />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="mt-auto">
                        <ul role="list" className="-mr-2 space-y-1">
                            {navigation_bot.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                                    >
                                        <item.icon
                                            aria-hidden="true"
                                            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-primary-600"
                                        />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;
