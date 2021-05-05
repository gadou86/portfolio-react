import React from 'react';
import "./style.css";
import AppM from './Modal'
import { Link, useLocation } from "react-router-dom";

import {Card} from 'react-bootstrap';



const Project = () => {

  const customTitle = {
    color: '#325288',
    fontSize: "54",
    fontWeight: "bold",
    marginBottom: "24"
};

  const cardInfo = [
    {
      image: "https://i.imgflip.com/58aw5z.gif",
      title: "JoinCodeBuddies",
      text: "Made with Html, Css,  Javascript, Rails",
      link: "https://www.joincodebuddies.com",
      code: "https://github.com/karinelegault/joincodebuddies"

    },
    {
      image: "https://i.imgflip.com/58azpd.gif",
      title: "Personal Portfolio",
      text: "Made with Html, Css, JavaScript",
      link: "https://gadou86.github.io/Portfolio/",
      code: "https://github.com/gadou86/portfolioGad"

    },
    {
      image: "https://imagizer.imageshack.com/img924/9247/Koyg0h.png",
      title: "Facebook Clone",
      text: "Made with React, Bootstrap, Firebase",
      link: "",
      code: "https://github.com/gadou86/fb-clone"

    },


    
  ];

  const renderCard = (card, index) => {
    return(
      <div className="box">
               
        <Card className="box-items">
        <a href={card.link} target="_blank">

        <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
        </a>
        
        <AppM />
          <Card.Body className="titi">
            <Card.Title style={customTitle}>{card.title}</Card.Title>
              <Card.Text className="container">
                {card.text}
              <a href={card.code} target="_blank">
                <p>👉SOURCE CODE👈</p>
              </a>                
              </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }


  return (
    <div className="Apps">
      <div className="grida">
        {cardInfo.map(renderCard)}
      </div>
    </div>
  )
}

export default Project;

