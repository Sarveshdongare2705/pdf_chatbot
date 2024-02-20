import React, { useEffect, useState } from "react";
import './card.scss';

import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

const Card = ({ text , bot }) => {

  const [result , setResult] = useState('');

  useEffect(() => {
    let charindex = 0;
    let typeTimer

    const type = () => {
      if (charindex <= text.length) {
        setResult(text.slice(0, charindex));
        charindex++;
        typeTimer = setTimeout(type, 20);
      } 
    };
    type();
    return () => {
      clearTimeout(typeTimer);
    };
  }, []);








  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeakButtonClick = () => {
    const synth = window.speechSynthesis;

    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
      setIsSpeaking(true);
    }
  };
  return (
    <div className="Card">
    {
        bot ? 
        <div className="flexer" id="bot">
              <div className="left">
              <div className="user">
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym90fGVufDB8fDB8fHww" alt=""/>
              </div>
              <div className="query">
                <div className="name">InsightBot</div>
                <div className="text">{result}</div>
              </div>
              </div>
              <div><button onClick={handleSpeakButtonClick}>{isSpeaking ?<MicOffIcon className="icons"/> :<MicIcon  className="icons"/>}</button></div>
    </div>
        :
        <div className="flexer">
              <div className="left">
              <div className="user">
                <img src="https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww" alt=""/>
              </div>
              <div className="query">
                <div className="name">Sarvesh Dongare</div>
                <div className="text">{text}</div>
              </div>
              </div>
    </div>
    }
    </div>
  );
};

export default Card;
