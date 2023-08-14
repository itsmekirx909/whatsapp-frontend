import axios from "axios"
import { deleteContacts } from "../redux/contactSlicer";

export const ContactsDelete = async(number, dispatch) =>  {
    try {
        const response = await axios.post('http://localhost:8000/api/contacts/delete', {number: number})

        dispatch(deleteContacts({number: number}))
    
    } catch (error) {
        console.error('Error fetching initial contacts:', error.message);
    }
};