import { createContext, useState,ReactNode } from 'react';

export  const EmailContext = createContext({});

export function EmailProvider({ children }: { children: ReactNode }) {
    const [email, setEmail] = useState(sessionStorage.getItem('email') || '');

    return (
        <EmailContext.Provider value={{ email, setEmail }}>
            {children}
        </EmailContext.Provider>
    )
}