"use client";

import {useAppStore} from '@/hooks/useAppStore';
import { useEffect } from 'react';

const Notification = () => {
    const showNotification = useAppStore((state) => state.showNotification);

    useEffect(() => {
        
        setTimeout(() => {
            useAppStore.setState({showNotification: false});
        }, 5000)

    }, [useAppStore((state) => state.showNotification)]);

    return (
        <div className={`lg:p-4 transition-all md:p-2 lg:shadow-md  p-1 lg:text-[16px] text-[14px] duration-300 fixed top-[60px] ${showNotification ? 'md:right-2 right-0' : '-right-full'} mx-auto bg-green-100 text-green-800 rounded-md w-full max-w-[400px]`}>
            Thank you for contacting me. I will get back to you soon!
        </div>
    )
}

export default Notification;