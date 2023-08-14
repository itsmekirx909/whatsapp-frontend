import { useEffect, useState } from "react";
import TextInp from "./contact components/textInp";
import Nav2 from "./text panel components/nav2";
import { useDispatch } from "react-redux";
import { ContactsPostEdit } from "./api targets/contactsPostEdit";


export default function TextPanel(obj) {
    const dispatch = useDispatch()
    const [msgs, setMsgs] = useState([])

    useEffect(()=>{
        setMsgs(obj.obj.msgs)
    }, [msgs, obj])

    const msgUpd = (data)=>{

        ContactsPostEdit({
            imgSrc: obj.obj.imgSrc,
            name: obj.obj.name,
            number: obj.obj.number,
            lastMsg: obj.obj.lastMsg,
            msgs: [...msgs, data]
        },dispatch)
        setMsgs([...msgs, data])
        
    }


    return(
        <div className="bg">
            <div>
            <Nav2>hello</Nav2>
            </div>

            {msgs && msgs.length?
                <div className="container">
                    {msgs.map((m, i)=>{
                        let cnm = 'other'
                        if(m.self){
                            cnm = 'self'
                        }

                        return(
                            <div className={`message ${cnm}`} key={i}>
                                {m.txt}
                                <div className="timestamp">{m.timestamp}</div>
                            </div>
                        )
                    })}
                </div>
            :
                null
            }

            <div className="bottom">
                <TextInp upd={msgUpd} />
            </div>

        </div>


    )
}