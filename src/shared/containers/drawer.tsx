import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FC, useState, useEffect } from 'react';
import CardBasket from "../../views/client/components/card-basket.tsx";
import Modal from "../components/modal.tsx";

interface DrawerOpen {
    setDrawerOpen: (open: boolean) => void;
}

interface CartItem {
    id: number;
    title: string;
    price: string;
    ingredients: string[];
    removed: string[];
    count: number;
}

const Drawer: FC<DrawerOpen> = ({ setDrawerOpen }) => {
    const [open] = useState(true);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<CartItem | null>(null);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(cart);
    }, []);

    const updateCart = (items: CartItem[]) => {
        setCartItems(items);
        localStorage.setItem('cart', JSON.stringify(items));
    };

    const handleIncrement = (item: CartItem) => {
        const updatedItems = cartItems.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
        );
        updateCart(updatedItems);
    };

    const handleDecrement = (item: CartItem) => {
        if (item.count === 1) {
            setItemToDelete(item);
            setIsModalOpen(true);
        } else {
            const updatedItems = cartItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, count: cartItem.count - 1 } : cartItem
            );
            updateCart(updatedItems);
        }
    };

    const handleDelete = (item: CartItem) => {
        setItemToDelete(item);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        if (itemToDelete) {
            const updatedItems = cartItems.filter(cartItem => cartItem.id !== itemToDelete.id);
            updateCart(updatedItems);
            setIsModalOpen(false);
        }
    };

    return (
        <Dialog open={open} onClose={() => setDrawerOpen(false)} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transform transition duration-300 ease-in-out data-[closed]:opacity-0"
            />
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-md transform transition duration-300 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                        >
                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div className="px-4 sm:px-6 pt-24">
                                    <div className="flex items-start justify-between">
                                        <DialogTitle className="text-base font-semibold leading-6 text-gray-900">Panier</DialogTitle>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button
                                                type="button"
                                                onClick={() => setDrawerOpen(false)}
                                                className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Fermer le panier</span>
                                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    {cartItems.length === 0 ? (
                                        <p>Votre panier est vide.</p>
                                    ) : (
                                        cartItems.map((item, index) => (
                                            <CardBasket
                                                key={index}
                                                title={item.title}
                                                removed={item.removed.length > 0 ? `Retiré: ${item.removed.join(', ')}` : ''}
                                                price={item.price}
                                                count={item.count}
                                                onIncrement={() => handleIncrement(item)}
                                                onDecrement={() => handleDecrement(item)}
                                                onDelete={() => handleDelete(item)}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
            <Modal isModalOpen={isModalOpen} setModalOpen={setIsModalOpen}>
                <p>Êtes-vous sûr de vouloir supprimer le menu "{itemToDelete?.title}" ?</p>
                <div className="flex justify-end space-x-4 mt-4">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
                    >
                        Annuler
                    </button>
                    <button
                        onClick={confirmDelete}
                        className="bg-red-200 text-gray px-4 py-2 rounded"
                    >
                        Supprimer
                    </button>
                </div>
            </Modal>
        </Dialog>
    );
};

export default Drawer;
