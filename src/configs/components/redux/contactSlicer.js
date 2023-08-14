import { createSlice } from '@reduxjs/toolkit';

let initialState = []

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        getContacts: (state, action)=>{
            const contacts = action.payload.contacts
            return contacts.sort((a,b) => (a.timestamp < b.timestamp) ? 1 : ((b.timestamp < a.timestamp) ? -1 : 0))
        },

        addContact: (state, action)=>{
            return [action.payload.newContact, ...state]
        },

        deleteContacts: (state, action)=>{
            return state.filter(s => s.number !== action.payload.number)
        },

        editContact: (state, action)=>{
            const others =state.filter(s => s.number !== action.payload.updatedContact.number)
            return [action.payload.updatedContact, ...others]
        },

    }
})

export const {getContacts, addContact, deleteContacts, editContact} = contactSlice.actions

export default contactSlice.reducer