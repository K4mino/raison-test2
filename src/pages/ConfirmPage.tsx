import React from 'react'
import { useHistory } from 'react-router'

import { EmailContext } from '../components/EmailContext'
import Header from '../components/Header'
import FormInput from '../components/FormInput'
import Popup from '../components/Popup'
const ConfirmPage: React.FC<{ email: string }> = () => {
 
  const history = useHistory()
  const {email}: {email: string} = React.useContext(EmailContext)
  const [isConfirmed, setIsConfirmed] = React.useState(false)
  const [postStatus, setPostStatus] = React.useState('Error')

  console.log(isConfirmed)
  const handleConfirm = async() => {
    try {
      const res = await fetch('api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        })
      })
      setIsConfirmed(true)
      if(res.ok) {
        const data = await res.json()
        console.log(data)
        setPostStatus('Success')
      }

    } catch (error) {
      setPostStatus('Error')
      console.log(error)
    }
  }
  const CloseModal = () => {
    setIsConfirmed(false)
  }

  React.useEffect(() => {
    const handleBackButton = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      CloseModal();
    };

    window.addEventListener('beforeunload', handleBackButton);

    return () => {
      window.removeEventListener('beforeunload', handleBackButton);
    };
  }, []);

  return (
    <>
        <Header/>
        <main className="flex flex-col p-4 h-full relative justify-between" >
            <FormInput value={email}/>
            <div className="flex">
                <button className="btn btn mt-auto" onClick={() => history.goBack()}>Back</button>
                <button className="btn btn-primary mt-auto" onClick={handleConfirm}>Confirm</button>
            </div>
            {isConfirmed && <Popup status={postStatus} closeModal={CloseModal}/>}
        </main>
    </>
  )
}

export default ConfirmPage