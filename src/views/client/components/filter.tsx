import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'

const filters = {
    price: [
        { value: '0', label: '$0 - $5', checked: false },
        { value: '5', label: '$5 - $10', checked: false },
        { value: '10', label: '$10 - $15', checked: false },
        { value: '15', label: '$15+', checked: false },
    ],
    category: [
        { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
        { value: 'tees', label: 'Tees', checked: false },
        { value: 'objects', label: 'Objects', checked: false },
        { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
        { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
    ],
}
const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
]

export default function Filter() {
    return (
        <div>
            <Disclosure
                as="section"
                aria-labelledby="filter-heading"
                className="grid items-center border-b border-t border-gray-200"
            >
                <h2 id="filter-heading" className="sr-only">
                    Filters
                </h2>
                <div className="relative col-start-1 row-start-1 py-4">
                    <div className="mx-auto flex space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
                        <div>
                            <DisclosureButton className="group flex items-center font-medium text-gray-700">
                                <FunnelIcon
                                    aria-hidden="true"
                                    className="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"
                                />
                                2 Filters
                            </DisclosureButton>
                        </div>
                        <div className="pl-6">
                            <button type="button" className="text-gray-500">
                                Clear all
                            </button>
                        </div>
                    </div>
                </div>
                <DisclosurePanel className="border-t border-gray-200 py-10">
                    <div className="mx-auto grid grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                        <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                            <fieldset>
                                <legend className="block font-medium">Price</legend>
                                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                    {filters.price.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center text-base sm:text-sm">
                                            <input
                                                defaultValue={option.value}
                                                defaultChecked={option.checked}
                                                id={`price-${optionIdx}`}
                                                name="price[]"
                                                type="checkbox"
                                                className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label htmlFor={`price-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>
                        <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                            <fieldset>
                                <legend className="block font-medium">Category</legend>
                                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                    {filters.category.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center text-base sm:text-sm">
                                            <input
                                                defaultValue={option.value}
                                                defaultChecked={option.checked}
                                                id={`category-${optionIdx}`}
                                                name="category[]"
                                                type="checkbox"
                                                className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label htmlFor={`category-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </DisclosurePanel>
                <div className="col-start-1 row-start-1 py-4">
                    <div className="mx-auto flex justify-end px-4 sm:px-6 lg:px-8">
                        <Menu as="div" className="relative inline-block">
                            <div className="flex">
                                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                    />
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="py-1">
                                    {sortOptions.map((option) => (
                                        <MenuItem key={option.name}>
                                            <a
                                                href={option.href}
                                                className=""
                                            >
                                                {option.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </div>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </Disclosure>
        </div>
    )
}
