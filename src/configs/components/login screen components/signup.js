import { useState } from "react"
import { useDispatch } from "react-redux"
import { AuthFetch } from "../api targets/authFetch"

export default function SignUpScreen(param){
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')
    const [inputValue2, setInputValue2] = useState('')

    const handleSignUp = ()=>{
        AuthFetch('signup', inputValue, inputValue2, dispatch)
    }

    return (
        <div>
            <h2>
                Sign Up
            </h2>

            <label className='bar bar2'>
                <span className='cp'>Number: </span>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => { setInputValue(e.target.value) }}
                    className='contactInp contactInp2'

                />
            </label>
            <div className="note">In (923...... form)</div>

            <label className='bar bar2 extra'>
                <span className='cp'>Pasword: </span>
                <input
                    type="password"
                    value={inputValue2}
                    onChange={(e) => { setInputValue2(e.target.value) }}
                    className='contactInp contactInp2'

                />
            </label>

            <div>Already have an account? <span onClick={()=>{param.flag(true)}} className="credButton">Login</span></div>

            <div>
                <button onClick={handleSignUp} className="modalButton">Sign Up</button>
            </div>

        </div>
    )
}
