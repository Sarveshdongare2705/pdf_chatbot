import React from "react";
import './card.scss';

const Card = ({ text , bot }) => {
  return (
    <div className="Card">
    {
        bot ? 
        <div className="flexer" id="bot">
              <div className="user">
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym90fGVufDB8fDB8fHww" alt=""/>
              </div>
              <div className="query">
                <div className="name">InsightBot</div>
                <div className="text">{text}</div>
              </div>
    </div>
        :
        <div className="flexer">
              <div className="user">
                <img src="https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww" alt=""/>
              </div>
              <div className="query">
                <div className="name">Sarvesh Dongare</div>
                <div className="text">{text}</div>
              </div>
    </div>
    }
    </div>
  );
};

export default Card;
