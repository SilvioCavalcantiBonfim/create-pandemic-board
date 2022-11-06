import React from "react";
import EditBar from './EditBar';

class BodyEdit extends React.Component{
    
    state = {
        name: 'New Project', 
        boardBackground: '',
        cities: [],
        routes: [], 
        illness: []
    }

    handleUpdateProject = (s) => {
        this.setState(s);
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    render(){
        return (<div className="BodyEdit">
            <div className="grid1">
                <EditBar  project={this.state} setProject={this.handleUpdateProject}/>
            </div>
            <div className="grid2">
                <div className="miniatureBoard">
                    <div className="dimension">895×456.7</div>
                    <img src={this.state.boardBackground} alt=''/>
                </div>
            </div> 
            <div className="grid3"><div className="menu"></div></div> 
    </div>);
    }
}

export default BodyEdit;