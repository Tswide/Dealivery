import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    isModalOpen: boolean;
    setModalOpen: (open: boolean) => void;
}

export default function Modal({ children, isModalOpen, setModalOpen }: ModalProps) {
    return (
        <Dialog open={isModalOpen} onClose={() => setModalOpen(false)} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-5 py-5 text-left shadow-xl transition-all"
                    >
                        {children}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}
