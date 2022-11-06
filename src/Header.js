import React from "react";
import { ReactComponent as VIRUS } from './icons/virus.svg';
import { ReactComponent as DOWNLOAD } from './icons/download.svg';

const NavMenu = (props) => { 
    return (<div className="Header">
        <div>
            <div><VIRUS /></div>
            <div>Pandemic Create Board</div>
        </div>
        <div>
            <button title="Download Project"><DOWNLOAD /></button>
        </div>
    </div>);
    // return (<>
    //     <Navbar variant={['dark', 'light'][props.theme]} bg={['secondary', 'light'][props.theme]}>
    //         <Container>
    //             <Navbar.Brand href="#" className="title"> 
    //                 <VIRUS/><div>Pandemic Create Board</div>
    //             </Navbar.Brand>
    //             <Button variant={['secondary', 'light'][props.theme]} onClick={props.contrastHandle}><CONTRAST/></Button>
    //         </Container>
    //     </Navbar>
    // </>);
}

export default NavMenu;