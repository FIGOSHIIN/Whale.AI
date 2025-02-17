import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../Context/context'

const Main = () => {
      const {onSent, recentPrompt, showResponse, loading, resultData, input, setInput} = useContext(Context);



  return (
    <div className='main'>
      <div className="nav">
        <p>Whale AI</p>
        <img className='whale-icon' src={assets.whale_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="grid">
          <p><span>Hello, Dev.</span></p>
          <p className="p-animation">How can I Help you today? </p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Git & GitHub Cheat Sheet, beginner-friendly reference for managing branches.</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>React + Firebase Hosting Guide – A step-by-step guide to fixing common ...</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Valorant Rank Climbing Strategies – A breakdown of advanced positioning ...</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Aim Training Routines for Valorant – A daily practice plan using Aim ...</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Whale AI may display inaccurate info, including about people, so double-check before using it to make decisions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
