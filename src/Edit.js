import React from "react";
import './Edit.js';
import { Button, Container, Navbar, ButtonGroup } from "react-bootstrap";
import { ReactComponent as ADDLOCATION } from './icons/add-location.svg';
import { ReactComponent as ADDROUTE } from './icons/add-route.svg';
import { ReactComponent as NEWFILE } from './icons/new-file.svg';
import { ReactComponent as UPLOADFILE } from './icons/upload-file.svg';
import { ReactComponent as DOWNLOADFILE } from './icons/download-file.svg';
import { ReactComponent as ILLNESS } from './icons/illness.svg';
import Color from "color";

const EditMenu = (props) => {
    return (<>
        <Navbar bg={['dark', 'success'][props.theme]} className="editMenu">
            <Container>
                <div className="d-flex">
                    <ButtonGroup>
                        <Button variant={['dark', 'success'][props.theme]} title='Create New Project'><NEWFILE /></Button>
                        <Button variant={['dark', 'success'][props.theme]} title='Upload Project'><UPLOADFILE /></Button>
                        <Button variant={['dark', 'success'][props.theme]} title='Download Project'><DOWNLOADFILE /></Button>
                    </ButtonGroup>
                    <div className="vr" style={{ color: '#fff', marginRight: '10px', marginLeft: '10px' }} />
                    <ButtonGroup>
                        <Button variant={['dark', 'success'][props.theme]} title='Create New City'><ADDLOCATION /></Button>
                        <Button variant={['dark', 'success'][props.theme]} title='Create New Route'><ADDROUTE /></Button>
                    </ButtonGroup>
                    <div className="vr" style={{ color: '#fff', marginRight: '10px', marginLeft: '10px' }} />
                    <ButtonGroup>
                        <Button variant={['dark', 'success'][props.theme]} title='Create New Illness' onClick={() => {
                            props.setProject((v) => {
                                const colorRandom = Color("hsl(" + Math.random() * 360 + ", 80%, 50%)")
                                v.illnessBox = v.illnessBox.concat([{
                                    transform: {
                                        position: { x: 500, y: 200 }
                                    },
                                    name: 'New Illness',
                                    color: colorRandom.hex().toString()
                                }]);
                                return v;
                            });
                        }}><ILLNESS /></Button>
                    </ButtonGroup>
                </div>
            </Container>
        </Navbar>
    </>);
}

export default EditMenu;