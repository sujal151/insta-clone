import React from 'react'
import { RiCloseLine } from 'react-icons/ri'
import "./Modal.css"

const Modal = () => {
    return (
        <div className="darkBg">
            <div className="centered">
                <div className='modal'>

                    <div className="modelHeader">
                        <h5 className="heading">Confirm</h5>
                    </div>

                    <button className="closeBtn">
                        <RiCloseLine></RiCloseLine>
                    </button>
                    <div className="modalContent">
                        Are you sure you want to delete this item?
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="logOutBtn">logout</button>
                            <button className="cancelBtn">cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Modal
