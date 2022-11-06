import React from "react";
import { ReactComponent as VIRUS } from './icons/virus.svg';

const Header = (props) => {

    return (<div className="Header">
        <div>
            <div><VIRUS /></div>
            <div>Pandemic Create Board</div>
        </div>
    </div>);
}

export default Header;