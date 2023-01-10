import React, { useEffect, useRef } from 'react';
import "../styles/ExampleModal.css"

const ExampleModal = ({ setOpen, open }) => {

    // the below codes are used to close the modal by clicking outside of the modal.
    const modalRef = useRef(null);

    const handleClickOutsideModal = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setOpen(false);

        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutsideModal, true);

        return () => {
            document.addEventListener("click", handleClickOutsideModal, true);
        };
    }, [modalRef]);

    // the codes to close the modal by clicking outside ended here.





    return (
        <div className={`modal-group-fixed`}>
            <div
                className="modal-group-relative"
            >

                <div ref={modalRef} className="modal-box">
                    <div className="modal-specific">
                        <h1>
                            Do you want to delete the project?
                        </h1>
                        <div className="modal-buttons-wrapper">

                            <button
                                onClick={() => setOpen(false)}

                            >
                                Cancel
                            </button>
                            <button onClick={() => alert('your item has been deleted')}>
                                Confirm
                            </button>
                        </div>
                        <button
                            className="modal-close" onClick={() => setOpen(false)}>X</button>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default ExampleModal;