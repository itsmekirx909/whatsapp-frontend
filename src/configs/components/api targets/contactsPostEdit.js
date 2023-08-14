import axios from "axios"
import { editContact } from "../redux/contactSlicer";

export const ContactsPostEdit = async(data, dispatch) =>  {
    try {
        const cookies = document.cookie.split('; ') || []
        const hashString = cookies.find(c => c.split('=')[0] == 'hash')
        const hash = hashString.split('=')[1]

        const date = Math.floor((new Date() * 1000))

        data.user = hash
        data.timestamp = date
        const response = await axios.put('http://localhost:8000/api/contacts/edit', {data})

        dispatch(editContact({updatedContact: response.data.data}))

    } catch (error) {
        console.error('Error fetching initial contacts:', error.message);
    }
};