import { useState } from "react";
import Modal2 from "./modal2";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../redux/contactSlicer";
import { ContactsDelete } from "../api targets/contactsDelete";

export default function ContactCard(obj){
    const dispatch = useDispatch()
    const [modalOpen, setModalOpen] = useState(false);

    const click = ()=>{
        obj.upd(obj.data)
    }

    const openModal = () => {
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };
    
      const deleteContact = ()=>{
        ContactsDelete(obj.data.number, dispatch)
      }


    return(
        <div onClick={click} className={`flex card ${obj.cnm}`}>
            <div>   <img src={obj.data.imgSrc? obj.data.imgSrc: 'https://static-00.iconduck.com/assets.00/person-icon-1901x2048-a9h70k71.png'} className="profile2" /> </div>

            <span>
                <div className="cname">{obj.data.name}</div>
                <div className="clm">{obj.data.lastMsg}</div>
            </span>

            <div className="icons">
            <img onClick={openModal} src={'https://icons.veryicon.com/png/o/education-technology/onemind/edit-97.png'} width={30} height={30} className="ed edx" /> 
            <img onClick={deleteContact} src={'https://cdn-icons-png.flaticon.com/512/1345/1345874.png'} width={20} height={20} className="ed" /> 
            </div>

            {modalOpen?
            <Modal2 
                isOpen={modalOpen}
                onClose={closeModal}
                data={obj}
            />
            :
            null
            }

        </div>
    )

}