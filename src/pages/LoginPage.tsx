import React from 'react'
import { useHistory } from 'react-router-dom'

import { EmailContext } from '../components/EmailContext'
import FormInput from '../components/FormInput'
import FormCheckbox from '../components/FormCheckbox'
import Header from '../components/Header'

const LoginPage: React.FC = () => {
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const contextValue = React.useContext(EmailContext)

    if (contextValue === null) {
        throw new Error('Email context value is null')
    }

    const { email, setEmail }: { email: string; setEmail: (email: string) => void } = contextValue
    const timerRef: any = React.useRef(null)
    const [isEmailValid, setIsEmailValid] = React.useState(false)
    const [timer, setTimer] = React.useState(500)
    const [isChecked, setIsChecked] = React.useState(false)
    const history = useHistory()

    React.useEffect(() => {
        return () => clearTimeout(timerRef.current)
    }, [])

    React.useEffect(() => {
        setIsEmailValid(emailRegExp.test(email))
    }, [email])

    const handleMouseDown = () => {
        timerRef.current = setInterval(() => {
            setTimer((prevTimer: number) => prevTimer - 10)
        }, 10)
    }

    const handleMouseUp = () => {
        if (timer < 0 && isEmailValid && isChecked) {
            sessionStorage.setItem('email', email)
            history.push('/step2')
        }
        if ((timer < 0 || timer > 0) && !isEmailValid && isChecked) {
            alert('wrong email')
        }

        if (timer < 0 && !isChecked && isEmailValid) {
            alert('Please check the box')
        }

        if (timer > 0 && isChecked && isEmailValid) {
            alert('Fail to hold')
        }

        if (timer > 0 && !isChecked && !isEmailValid) {
            alert('Please complete the form')
        }

        clearInterval(timerRef.current)
        setTimer(500)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault()

        timerRef.current = setInterval(() => {
            setTimer((prevTimer:number) => prevTimer - 10)
        }, 10)
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
      e.preventDefault()

        if (timer < 0 && isEmailValid && isChecked) {
            sessionStorage.setItem('email', email)
            history.push('/step2')
        }

        if ((timer < 0 || timer > 0) && !isEmailValid && isChecked) {
            alert('Wrong email')
        }

        if (timer < 0 && !isChecked && isEmailValid) {
            alert('Please check the box')
        }

        if (timer > 0 && isChecked && isEmailValid) {
            alert('Fail to hold')
        }

        if (timer > 0 && !isChecked && !isEmailValid) {
            alert('Please complete the form')
        }

        clearInterval(timerRef.current)
        setTimer(500)
    }

    return (
        <>
            <Header />
            <main className="flex flex-col p-4 h-full">
                <FormInput
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
                <div className="p-1"></div>
                <FormCheckbox
                    checked={isChecked}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked)}
                />
                <button
                    className="btn btn-primary mt-auto"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    Hold to proceed
                </button>
            </main>
        </>
    )
}

export default LoginPage
