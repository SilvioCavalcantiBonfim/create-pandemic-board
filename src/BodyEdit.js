import Color from "color";
import React from "react";
import EditBar from './EditBar';
import { ReactComponent as CITY } from './icons/city.svg';
import Properties from "./Properties";
import DarkenColor from "./toolkit";

class BodyEdit extends React.Component {

    state = {
        name: 'New Project',
        boardBackground: '',
        cities: [],
        routes: [],
        illness: [...new Array(4)].map((e,i) => {
            return {name: `illness ${i}`, type: i, color: new Color(`hsl(${(i/4 * 360)},80%,45%)`).hex().toString()};
        }),
        sizeBoard: [1083, 742],
        colorRoutes: 'black',
        widthRoutes: 2,

        _system: {
            action: 0,
            lastSelect: null,
            isCaptal: 0,
            currentColor: 0,
            currentCostRoute: 1 
        }
    }

    handleUpdateProject = (s) => {
        this.setState(s);
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    onLoadImage = (event) => {
        this.setState((s) => {
            let newS = s;
            let rect = event.target.getBoundingClientRect();
            newS.sizeBoard = [Math.floor(rect.width), Math.floor(rect.height)];
            return newS;
        })
    }

    HandleAdd = (event) => {
        if (this.state._system.action === 1) {
            this.setState((s) => {
                let auxS = s;
                let rect = event.target.getBoundingClientRect();
                let hue = Math.floor(Math.random() * 360);
                auxS.cities = s.cities.concat([{ x: event.clientX - rect.left - 12, y: event.clientY - rect.top - 24, illnessID: this.state._system.currentColor, isCaptal: this.state._system.isCaptal}]);//-[0,26,12]
                return auxS;
            });
        } else if (this.state._system.action === 2) {
            if (event.target.farthestViewportElement !== undefined && event.target.farthestViewportElement !== null)
                if (this.state._system.lastSelect === null) {
                    this.setState(v => {
                        let aux = v;
                        aux._system.lastSelect = Number(event.target.farthestViewportElement.id);
                        return aux
                    })
                } else {
                    this.setState(v => {
                        let aux = v;
                        let newRoute = [this.state._system.lastSelect, Number(event.target.farthestViewportElement.id),this.state._system.currentCostRoute];
                        if (!(newRoute in v.routes || newRoute.reverse() in v.routes) && this.state._system.lastSelect !== Number(event.target.farthestViewportElement.id))
                            aux.routes = v.routes.concat([newRoute])
                        aux._system.lastSelect = null;
                        return aux
                    })
                }
        }
    }

    render() {
        return (<div className="BodyEdit">
            <div className="grid1">
                <EditBar project={this.state} setProject={this.handleUpdateProject} />
            </div>
            <div className="grid2">
                <div className="miniatureBoard" onClick={this.HandleAdd}>
                    <div className="dimension">{this.state.sizeBoard[0]}×{this.state.sizeBoard[1]}</div>
                    <img src={this.state.boardBackground} onLoad={this.onLoadImage} id='boardBackground' alt='' />
                    <svg style={{ width: this.state.sizeBoard[0] + 'px', height: this.state.sizeBoard[1] + 'px' }} className='RouteLayer'>
                        {
                            this.state.routes.map((e, i) => {
                                return (<line key={i} x1={this.state.cities[e[0]].x + 12} y1={this.state.cities[e[0]].y + 24} x2={this.state.cities[e[1]].x + 12} y2={this.state.cities[e[1]].y + 24} style={{ stroke: this.state.colorRoutes, strokeWidth: this.state.widthRoutes}} />)
                            })
                        }
                    </svg>
                    {this.state.cities.map((e, i) => { return <CITY id={i} key={i} className='cityPin' style={{ top: e.y + 'px', left: e.x + 'px', color: this.state.illness[e.illnessID].color, stroke: DarkenColor(this.state.illness[e.illnessID].color, 1.3) }}></CITY> })}
                </div>
            </div>
            <div className="grid3">
                <Properties project={this.state} setProject={this.handleUpdateProject}/>
            </div>
        </div>);
    }
}

export default BodyEdit;