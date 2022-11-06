import React from "react";
import { ReactComponent as VIRUS } from './icons/virus.svg';
import { ReactComponent as DOWNLOAD } from './icons/download.svg';

const Header = (props) => {

    return (<div className="Header">
        <div>
            <div><VIRUS /></div>
            <div>Pandemic Create Board</div>
        </div>
        {/* <div>
            <button title="Export Project" onClick={HandleExport}><DOWNLOAD /></button>
        </div> */}
    </div>);
}

export default Header;