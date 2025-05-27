import React from 'react';
import Navbar from '@/components/site/NavBar';

export default function SignInLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <Navbar />
            <main className='grow'> {children}</main>
        </div>
    ) 
}