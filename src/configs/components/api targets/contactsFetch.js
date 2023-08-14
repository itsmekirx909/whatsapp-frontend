import axios from "axios"
import { getContacts } from "../redux/contactSlicer";

export const ContactsFetch = async(hash, dispatch) =>  {
    try {
        const response = await axios.post('http://localhost:8000/api/contacts/get', { hash });

        dispatch(getContacts({contacts: response.data.data}))
    
    } catch (error) {
        console.error('Error fetching initial contacts:', error.message);
    }
};