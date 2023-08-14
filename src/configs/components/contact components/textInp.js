import { useState } from "react"


export default function TextInp(param){
    const [text, setText] = useState('')

    const send = ()=>{
        const timestamp = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          });
        
        const txt = text
        setText('')

        param.upd({txt, timestamp, self:true})

    }
    
    return(
        <div className="flex inpBar ">

                <img className="emj" src="https://icons-for-free.com/iconfiles/png/512/emoji+smile-1329858316230241522.png" width={30} height={30} />
                <input onChange={(e)=>{setText(e.target.value)}} value={text} type="text" className="inp" placeholder="Type a message" />

                {text.length?
                    <img onClick={send} className="emj emj2" src="https://cdn-icons-png.flaticon.com/512/3106/3106794.png" width={30} height={30} />
                :
                    <img className="emj emj2" src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png" width={30} height={30} />
                }

        </div>
    )
}