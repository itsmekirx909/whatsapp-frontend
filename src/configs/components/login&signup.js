import { useEffect, useState } from "react"
import LoginScreen from "./login screen components/login"
import SignUpScreen from "./login screen components/signup"
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"


export default function Login() {
    const location = useLocation()
    const navigate = useNavigate()
    const auth = useSelector(state => state.auth)
    const searchParams = new URLSearchParams(location.search);
    const [login, setLogin] = useState(true)
    const [loader, setLoader] = useState(false)
    const [hash, setHash] = useState(searchParams.get('hash'))
    const cookies = document.cookie.split('; ')


    useEffect(() => {
        let i = 0
        cookies.find(c => {
            if (c.split('=')[0] == 'hash') {
                setHash(c.split('=')[1])
            } else {
                i++
            }
        })

        if (auth) {
            navigate('/')
        }

    }, [auth])

    const handler = (flag) => {
        setLogin(flag)
    }

    return (
        <div className="back">

            <div className="box">



                    {login ?
                        <LoginScreen flag={handler} />
                        :
                        <SignUpScreen flag={handler} />

                    }


            </div>

        </div>
    )
}