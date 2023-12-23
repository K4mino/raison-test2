import { createContext, useState,ReactNode,useContext } from 'react';

export type EmailContextType = {
    email: string;
    setEmail: (email: string) => void;
  };

export  const EmailContext = createContext<EmailContextType | null>(null);
export function EmailProvider({ children }: { children: ReactNode }) {
    const [email, setEmail] = useState(sessionStorage.getItem('email') || '');

    const contextValue: EmailContextType = {
        email,
        setEmail,
      };

    return (
        <EmailContext.Provider value={contextValue}>
            {children}
        </EmailContext.Provider>
    )
}
