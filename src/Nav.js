import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {ReactComponent as VIRUS} from './icons/virus.svg';
import { Button } from "react-bootstrap";
import {ReactComponent as CONTRAST} from './icons/contrast.svg';
import './Nav.css';


const NavMenu = (props) => {

    return (<>
        <Navbar variant={['dark', 'light'][props.theme]} bg={['secondary', 'light'][props.theme]}>
            <Container>
                <Navbar.Brand href="#" className="title"> 
                    <VIRUS/><div>Pandemic Create Board</div>
                </Navbar.Brand>
                <Button variant={['secondary', 'light'][props.theme]} onClick={props.contrastHandle}><CONTRAST/></Button>
            </Container>
        </Navbar>
    </>);
}

export default NavMenu;