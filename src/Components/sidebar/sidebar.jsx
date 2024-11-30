import React, { useContext, useState } from "react"
import './Sidebar.css'
import { assets } from "../../assets/assets"
import { Context } from "../../context/context"


const Sidebar=()=>{

    const[extended,setextended]=useState(false)
    // const {onsent,prevprompt,setrecentPrompt}=useContext(Context)
    return(
        <div className="sidebar">
            <div className="top">
                <img  onClick={()=>setextended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended?<p>New chat</p>:null}
                </div>
                {extended
                ?
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>What is react</p>
                    </div>

                </div>
                :null
}

            </div>
            <div className="bottom" >
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended?<p>HELP</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Settings</p>:null}
                </div>

            </div>

        </div>
    )
}
export default Sidebar