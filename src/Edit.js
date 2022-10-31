import React from "react";
import './Edit.js';
import { Button, ButtonGroup, Container, Navbar } from "react-bootstrap";
import { ReactComponent as ADDLOCATION } from './icons/add-location.svg';
import { ReactComponent as ADDROUTE } from './icons/add-route.svg';

const EditMenu = (props) => {
    return (<>
        <Navbar bg={props.theme}>
            <Container>
                <div style={{display: 'flex'}}>
                    <Button variant={props.theme} title='Create New City'><ADDLOCATION /></Button>
                    <div className="vr" style={{color: '#fff',marginRight: '10px', marginLeft: '10px'}}/>
                    <Button variant={props.theme} title='Create New Route'><ADDROUTE /></Button>
                </div>
            </Container>
        </Navbar>
    </>);
}

export default EditMenu;