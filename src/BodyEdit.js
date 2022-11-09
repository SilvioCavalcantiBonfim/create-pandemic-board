import React from "react";
import EditBar from './EditBar';
import { ReactComponent as CITY } from './icons/city.svg';
import Properties from "./Properties";

class BodyEdit extends React.Component {

    state = {
        name: 'New Project',
        boardBackground: '',
        cities: [],
        routes: [],
        illness: [],
        sizeBoard: [1083, 742],
        colorRoutes: 'black',
        widthRoutes: 2,

        _system: {
            action: 0,
            lastSelect: null
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

    HandleAddCity = (event) => {
        if (this.state._system.action === 1) {
            this.setState((s) => {
                let auxS = s;
                let rect = event.target.getBoundingClientRect();
                let hue = Math.floor(Math.random() * 360);
                auxS.cities = s.cities.concat([{ x: event.clientX - rect.left - 12, y: event.clientY - rect.top - 24, color: "hsl(" + hue + ",80%,75%)", stroke: "hsl(" + hue + ",54%, 37%)" }]);
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
                    console.log("Nova rota => ", [this.state._system.lastSelect, Number(event.target.farthestViewportElement.id)])
                    this.setState(v => {
                        let aux = v;
                        let newRoute = [this.state._system.lastSelect, Number(event.target.farthestViewportElement.id)];
                        if (!(newRoute in v.routes || newRoute.reverse() in v.routes))
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
                <div className="miniatureBoard" onClick={this.HandleAddCity}>
                    <div className="dimension">{this.state.sizeBoard[0]}×{this.state.sizeBoard[1]}</div>
                    <img src={this.state.boardBackground} onLoad={this.onLoadImage} id='boardBackground' alt='' />
                    <svg style={{ width: this.state.sizeBoard[0] + 'px', height: this.state.sizeBoard[1] + 'px' }} className='RouteLayer'>
                        {
                            this.state.routes.map((e, i) => {
                                return (<line key={i} x1={this.state.cities[e[0]].x + 12} y1={this.state.cities[e[0]].y + 24} x2={this.state.cities[e[1]].x + 12} y2={this.state.cities[e[1]].y + 24} style={{ stroke: this.state.colorRoutes, strokeWidth: this.state.widthRoutes }} />)
                            })
                        }
                    </svg>
                    {this.state.cities.map((e, i) => { return <CITY id={i} key={i} className='cityPin' style={{ top: e.y + 'px', left: e.x + 'px', color: e.color, stroke: e.stroke }}></CITY> })}
                </div>
            </div>
            <div className="grid3">
                <Properties/>
            </div>
        </div>);
    }
}

export default BodyEdit;