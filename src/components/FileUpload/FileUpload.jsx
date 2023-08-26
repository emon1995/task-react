import { useState } from 'react';
import { FaPaperclip } from 'react-icons/fa';
import Modal from '../Modal/Modal';

const FileUpload = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(0);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    };

    const modalHandler = () => {
        // addBookings(bookingInfo)
        //     .then((data) => {
        //         updateStatus(roomData._id, true)
        //             .then((data) => {
        //                 console.log(data);
        //                 toast.success("Booking Successful!");
        //                 // NavigationPreloadManager("/dashboard/my-bookings")
        //                 closeModal();
        //             })
        //             .catch((err) => {
        //                 console.log(err);
        //                 closeModal();
        //             });
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         closeModal();
        //     });
    };



    return (
        <div className="flex items-center gap-2 ">
            <FaPaperclip className='cursor-pointer' onClick={openModal} />
            <h1 className='font-bold text-sm'>{count}</h1>
            <Modal
                modalHandler={modalHandler}
                isOpen={isOpen}
                closeModal={closeModal}
                setCount={setCount}
            />
        </div>
    );
};

export default FileUpload;