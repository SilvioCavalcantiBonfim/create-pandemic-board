import React, { useEffect, useRef, useState } from "react";
import './boardEdit.css';
import { Container, Form, Navbar } from "react-bootstrap";
import teste from './icons/Tabuleiro.png';
import { ReactComponent as SYRINGE } from './icons/syringe.svg';
import { ReactComponent as FLASK } from './icons/flask.svg';
import { ReactComponent as VIRUS } from './icons/virus.svg';

const BoardEdit = (props) => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const boardRef = useRef(null);
    const [selectedProperties, setselectedProperties] = useState(null);

    useEffect(() => {
        let localBoardRef = null;
        if (boardRef.current)
            localBoardRef = boardRef.current;

        const handleOnMouseMove = (event) => {
            const rect = localBoardRef.getBoundingClientRect();
            setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top })
        }

        localBoardRef.addEventListener('mousemove', handleOnMouseMove);
        return () => {
            localBoardRef.removeEventListener('mousemove', handleOnMouseMove);
        }
    }, [props, selectedProperties]);
    return <Container className="d-flex" fluid="md">
        <div className={"w-100 mt-2 active-animation-running map " + ["bg-dark", "bg-white"][props.theme]} ref={boardRef}>
            <Navbar sticky="top">
                <Form.Control type='color' className='pl-2 border-0 p-0 m-0' value={(selectedProperties !== null) ? props.project[selectedProperties[0]][selectedProperties[1]].color : '#ffffff'}
                    onChange={(event) => {
                        if (selectedProperties !== null)
                            props.setProject(v => {
                                v[selectedProperties[0]][selectedProperties[1]].color = event.target.value;
                                return v;
                            });
                    }}
                />
            </Navbar>
            <img src={teste} alt='Board' className="w-100 h-100" />
            {props.project.illnessBox.map((e, i) => {
                return <Illness coords={coords} key={i} id={i} IllnessBoardSet={props.setProject} setselectedProperties={setselectedProperties} project={props.project} />
            })}
        </div>
    </Container>
}

const Properties = (props) => {
    return <div className={"properties d-flex border-radius py-2 px-3 mt-2 bg-" + ['dark', 'white'][props.theme]}>
        <Form.Control type='color' value={(props.selectedProperties !== null) ? props.project[props.selectedProperties[0]][props.selectedProperties[1]].color : '#ffffff'}
        />
    </div>
}

const Illness = (props) => {
    const [mode, setMode] = useState(0);
    const illnessRef = useRef(null);
    const [localClick, setLocalClick] = useState({ x: 0, y: 0 });
    return <div className="illness"
        ref={illnessRef}
        style={{
            left: [props.project.illnessBox[props.id].transform.position.x, props.coords.x - localClick.x][mode] + 'px',
            top: [props.project.illnessBox[props.id].transform.position.y, props.coords.y - localClick.y][mode] + 'px',
            color: props.project.illnessBox[props.id].color,
            cursor: ['pointer', 'grabbing'][mode]
        }}
        onClick={(event) => {
            props.setselectedProperties(['illnessBox', props.id]);
        }}
        onMouseDown={(event) => {
            if (1 - mode) {
                setMode(1);
                const rect = illnessRef.current.getBoundingClientRect();
                setLocalClick({ x: event.clientX - rect.left, y: event.clientY - rect.top });
            }
        }}
        onMouseUp={(event) => {
            if (mode) {
                setMode(0);
                props.IllnessBoardSet((v) => {
                    v.illnessBox[props.id].transform.position = { x: props.coords.x - localClick.x, y: props.coords.y - localClick.y };
                    return v
                });
            }
        }}
    >
        <div className="d-flex justify-content-between px-2">
            <VIRUS className='rounded-circle mt-2 mb-1 virus p-1' />
            <FLASK className='rounded-circle mt-2 mb-1 shake p-1' />
            <SYRINGE className='rounded-circle mt-2 mb-1 syringe p-1' />
        </div>
        <div className="illness__text p-1">{props.name}</div>
    </div>;
}

export default BoardEdit;