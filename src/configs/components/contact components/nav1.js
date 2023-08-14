import { useState } from "react";
import Modal from "./modal"


export default function Nav1(param) {
    const imgSrc = 'https://tinyjpg.com/images/social/website.jpg'
    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  

    return (
        <div className="flex nav1">

            <div>   <img src={imgSrc} className="profile" />  </div>

            <div className="addCont" onClick={openModal}>

                <img src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png' className="add" width={30} height={30} />

            </div>

            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
            />

        </div>
    )
}