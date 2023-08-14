import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlicer';
import { ContactsPostAdd } from '../api targets/contactsPostAdd';

export default function Modal({ isOpen, onClose }) {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [invalid, setInvalid] = useState('');

  const save = () => {
    if(!inputValue || !inputValue2){
        setInvalid('Fill the fields first')

        setTimeout(() => {
            setInvalid('')
        }, 3000);

        return
    }

    if(inputValue.length !== 10){
        setInvalid('Number must contain 10 digits')

        setTimeout(() => {
            setInvalid('')
        }, 3000);

        return
    }

    if(Number(inputValue).toString() == 'NaN'){
        setInvalid('Phone number must not contain a symbol or alphabet')

        setTimeout(() => {
            setInvalid('')
        }, 3000);

        return
    }


    ContactsPostAdd({
        imgSrc: null,
        name: inputValue2,
        number: inputValue,
        lastMsg: '',
        msgs: []
    }, dispatch)



    setInputValue('');
    setInputValue2('');
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Enter Contact Info</h2>
        
        <label className='bar'>
        <span className='cp'>+92- </span>
        <input
          type="text"
          value={inputValue}
          onChange={(e)=>{setInputValue(e.target.value)}}
          className='contactInp'
          
        />
        </label>

        <label className='bar'>
        <span className='cp'>Name: </span>
        <input
          type="text"
          value={inputValue2}
          onChange={(e)=>{setInputValue2(e.target.value)}}
          className='contactInp'
          
        />
        </label>

        <div className='invalid'>{invalid}</div>

        <div className="modal-buttons">
          <button className='modalButton' onClick={save}>Save</button>
          <button className='modalButton' onClick={()=>{
            onClose()
            setInputValue('');
            setInputValue2('');
            }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
