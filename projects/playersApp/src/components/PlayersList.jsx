import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Player from "./Player";

const PlayerList = ({playerList}) => {

    return (
        <div>
            <Container>
                <Row>
                    {playerList.map(player => 
                    <Col>
                        <Player 
                            imageURL = {player.imageURL}
                            name = {player.name}
                            age = {player.age}
                            team = {player.team}
                            position = {player.position}
                            value = {player.value}
                            jerseyNumber = {player.jerseyNumber}
                        />
                    </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default PlayerList;