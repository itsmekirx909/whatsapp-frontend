import { useEffect, useState } from "react"
import ContactCard from "./contact components/contactCards"
import Nav1 from "./contact components/nav1"
import SearchBar from "./contact components/searBar"
import TextPanel from "./textPanel"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { ContactsFetch } from "./api targets/contactsFetch"

export default function Contacts() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const contacts = useSelector(state => state.contacts)
    const [focus, setFocus] = useState(contacts[0] && '')
    const [hash, setHash] = useState('')
    const [load, setLoad] = useState(false)
    const cookies = document.cookie.split('; ') || []


    useEffect(() => {

        let i = 0
        cookies.find(c => {
            if (c.split('=')[0] == 'hash' && (c.split('=')[1] !== 'undefined' || c.split('=')[1] !== 'null')) {
                setHash(c.split('=')[1])
            } else {
                i++
            }
        })

        if (!hash && i === cookies.length) {
            navigate('/login')
        }else{
            ContactsFetch(hash, dispatch)
        }

    }, [hash])



    useEffect(() => {
        if (contacts.length && contacts[0]) {
            setFocus(contacts[0])
            setLoad(true)
        }
    }, [contacts])


    const onUpd = (data) => {
        setFocus(data)
    }


    return (
        load ?
            <div className="flex2">

                <div className="contactPanel scrollEn">

                    <Nav1 />

                    <div>
                        <SearchBar />
                    </div>

                    <div className="scrollEn">

                        {focus && contacts.length ?
                            contacts.map((o, i) => {
                                let cnm = ''
                                if (JSON.stringify(focus) == JSON.stringify(o)) {
                                    cnm = 'focussed'
                                }


                                return (
                                    <div key={i}>
                                        <ContactCard upd={onUpd} cnm={cnm} data={o} />
                                    </div>
                                )
                            })
                            :
                            null}
                    </div>

                </div>

                <div>
                    <TextPanel obj={focus} />
                </div>

            </div>
            :
            <div className="loader-container">
            <div className="loader"></div>
            </div>
    )
}

