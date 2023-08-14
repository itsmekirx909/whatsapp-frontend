import axios from "axios"
import { addContact } from "../redux/contactSlicer";

export const ContactsPostAdd = async(data, dispatch) =>  {
    try {
        const cookies = document.cookie.split('; ') || []
        const hashString = cookies.find(c => c.split('=')[0] == 'hash')
        const hash = hashString.split('=')[1]

        const date = Math.floor((new Date() * 1000))
        
        data.user = hash
        data.timestamp = date
        const response = await axios.post('http://localhost:8000/api/contacts/add', data)

        dispatch(addContact({newContact: response.data.data}))

    } catch (error) {
        console.error('Error fetching initial contacts:', error.message);
    }
};