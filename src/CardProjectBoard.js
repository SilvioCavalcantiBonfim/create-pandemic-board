import React from "react";
import Card from 'react-bootstrap/Card';
import imageboard from './icons/Tabuleiro.png';
import { ReactComponent as EDIT } from './icons/edit.svg';
import './CardProjectBoard.css';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ButtonGroup } from "react-bootstrap";

const CardBoard = (props) => {
    return (<div title={"Open " + props.title} className="CardBoard">
        <Card style={{ width: '18rem' }} bg={['secondary', 'light'][props.theme]} text={['white', 'black'][props.theme]}>
            <Card.Img style={{ width: '286px', height: '191.41px' }} variant="top" src={imageboard} alt="teste" />
            <Card.Body variant="dark">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: 'left' }}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <DropdownButton as={ButtonGroup} data-toggle="dropdown">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
            </Card.Body>
        </Card>
    </div>);
}

export default CardBoard;