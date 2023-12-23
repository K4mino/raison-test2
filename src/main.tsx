import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { EmailProvider } from './components/EmailContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <EmailProvider>
            <App />
        </EmailProvider>
    </React.StrictMode>
)
