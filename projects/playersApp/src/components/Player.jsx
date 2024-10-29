import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({imageURL, name, age, team, position, value, jerseyNumber}) => {

    return (
        <>
          <Card style={{ width: '18rem' }} className="mb-5">
            <Card.Img variant="top" src={imageURL} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
                <p>Name : {name}</p>
                <p>Age : {age}</p>
                <p>Team : {team}</p>
                <p>Position : {position}</p>
                <p>Value : {value}</p>
                <p>Jersey number : {jerseyNumber}</p>
            </Card.Body>
          </Card>
        </>
    )
}

Player.defaultProps = {
    name: "Elephant",
    age: "N/A",
    team: "Côte d'Ivoire",
    position: "N/A",
    value: "322364",
    jerseyNumber: "225",
};

export default Player;