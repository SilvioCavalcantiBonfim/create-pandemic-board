import React from "react";
import EditBar from './EditBar';
import { ReactComponent as CITY } from './icons/city.svg';

class BodyEdit extends React.Component {

    state = {
        name: 'New Project',
        boardBackground: '',
        cities: [{
            color: "hsl(80,80%,75%)",
            stroke:"hsl(80,54%, 37%)",
            x:730,      
            y:12
        },{
            color: "hsl(80,80%,75%)",
            stroke:"hsl(80,54%, 37%)",
            x:100,      
            y:120
        }],
        routes: [[0,1]],
        illness: [],
        sizeBoard: [0, 0],

        _system: {
            action: 0
        }
    }

    handleUpdateProject = (s) => {
        this.setState(s);
    }

    componentDidUpdate() {
        let cv = document.getElementById('routesDrawn');
        console.log(cv)
        let ctx = cv.getContext('2d');
        ctx.strokeStyle = 'black';
        this.state.routes.map((e,i) => {
            ctx.moveTo(this.state.cities[e[0]].x,this.state.cities[e[0]].y);
            ctx.moveTo(this.state.cities[e[1]].x,this.state.cities[e[1]].y);
        })
        ctx.stroke();

    }
    onLoadImage = (event) => {
        this.setState((s) => {
            let newS = s;
            let rect = event.target.getBoundingClientRect();
            newS.sizeBoard = [Math.floor(rect.width), Math.floor(rect.height)];
            return newS;
        })
    }

    HandleAddCity = (event) => {
        if (this.state._system.action === 1)
            this.setState((s) => {
                let auxS = s;
                let rect = event.target.getBoundingClientRect();
                console.log(rect)
                let hue = Math.floor(Math.random()*360);
                auxS.cities = s.cities.concat([{ x: event.clientX - rect.left - 12, y: event.clientY - rect.top - 24 , color: "hsl(" + hue + ",80%,75%)",stroke: "hsl(" + hue + ",54%, 37%)"}]);
                return auxS;
            });
        else if(this.state._system.action === 2){
            if(event.target.farthestViewportElement !== undefined)
                console.dir(event.target.farthestViewportElement.id);
        }
    }

    render() {
        return (<div className="BodyEdit">
            <div className="grid1">
                <EditBar project={this.state} setProject={this.handleUpdateProject} />
            </div>
            <div className="grid2">
                <div className="miniatureBoard" onClick={this.HandleAddCity}>
                    <div className="dimension">{this.state.sizeBoard[0]}×{this.state.sizeBoard[1]}</div>
                    <img src={this.state.boardBackground} onLoad={this.onLoadImage} id='boardBackground' alt='' />
                    <canvas id="routesDrawn"/>
                    {this.state.cities.map((e, i) => { return <CITY id={i} key={i} className='cityPin' style={{ top: e.y + 'px', left: e.x + 'px', color: e.color, stroke: e.stroke }}></CITY> })}
                </div>
            </div>
            <div className="grid3"><div className="menu"></div></div>
        </div>);
    }
}

export default BodyEdit;