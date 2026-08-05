"use client";

import { useAppStore } from '@/hooks/useAppStore';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Notification = () => {
    const showNotification = useAppStore((state) => state.showNotification);

    useEffect(() => {
        if (!showNotification) return;
        const timeout = setTimeout(() => {
            useAppStore.setState({ showNotification: false });
        }, 5000);
        return () => clearTimeout(timeout);
    }, [showNotification]);

    return (
        <AnimatePresence>
            {showNotification && (
                <motion.div
                    initial={{ opacity: 0, y: -16, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="fixed top-20 right-4 z-[70] flex items-center gap-3 rounded-xl bg-green-600 text-white shadow-xl px-4 py-3 max-w-sm"
                >
                    <CheckCircle2 size={20} className="shrink-0" />
                    <p className="text-sm">Thank you for contacting me. I will get back to you soon!</p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Notification;
