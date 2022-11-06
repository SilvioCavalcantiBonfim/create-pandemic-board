import React from "react";
import EditBar from './EditBar';

const BodyEdit = (props) => { 


    return (<div className="BodyEdit">
        <div><EditBar  project={props.project} setProject={props.setProject}/>
            <div className="miniatureBoard" style={{backgroundImage: 'url('+props.project.boardBackground+')'}}>
                <div className="dimension">895×456.7</div>
            </div>
        </div> 
        <div className="menu"></div> 
    </div>);
}

export default BodyEdit;