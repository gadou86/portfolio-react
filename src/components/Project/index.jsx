import React from 'react';
import "./style.css";
import AppM from './Modal'

import {Card} from 'react-bootstrap';



const Project = () => {

  const customTitle = {
    color: '#313131',
    fontSize: "34",
    fontWeight: "light",
    marginBottom: "24"
};

  const cardInfo = [
    {
      image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      title: "JoinCodeBuddies",
      text: ""
    },
    {
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      title: "Sushi Saizen",
      text: ""
    },
    {
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      title: "6000 Metropolitain",
      text: ""
    },
    {
      image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      title: "Eden Boucherie",
      text: ""
    },
    {
      image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      title: "Facebook Clone",
      text: ""
    },

    {
      image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      title: "ZcodeBuddie",
      text: ""
    },

    {
      image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      title: "Portfolio",
      text: ""
    },
    
  ];

  const renderCard = (card, index) => {
    return(
      <div className="box">
        <Card className="box-items">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
        <AppM />
          <Card.Body className="titi">
            <Card.Title style={customTitle}>{card.title}</Card.Title>
              <Card.Text>
                {card.text}
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