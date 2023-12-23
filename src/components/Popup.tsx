import React from 'react'

const Popup = ({ status, closeModal }) => {
    return (
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
        <div className="bg-black rounded-lg p-6 w-48 h-48 flex flex-col justify-center items-center">
          <h1>{status}</h1>
          <button className="btn btn-primary" onClick={closeModal}>Close</button>
        </div>
      </div>
    )
}

export default Popup
