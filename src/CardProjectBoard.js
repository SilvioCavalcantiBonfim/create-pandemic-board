import React from "react";
import Card from 'react-bootstrap/Card';
import imageboard from './icons/Tabuleiro.png';
import {ReactComponent as EDIT} from './icons/edit.svg';
import './CardProjectBoard.css';

const CardBoard = (props) => {
    return (<div title={"Open "+props.title} className="CardBoard">
        <Card style={{ width: '18rem'}} bg={['secondary', 'light'][props.theme]} text={['white', 'black'][props.theme]}>
            <Card.Img style={{ width: '286px', height: '191.41px'}} variant="top" src={imageboard} alt="teste"/>
            <Card.Body variant="dark">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{textAlign: 'left'}}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        <div className="CardBoardAfter"><EDIT/></div>
    </div>);
}

export default CardBoard;