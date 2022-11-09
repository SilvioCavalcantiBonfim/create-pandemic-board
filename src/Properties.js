import React from "react";
import { ReactComponent as VIRUS } from './icons/virus.svg';
import { ReactComponent as BACTERIUM } from './icons/bacterium.svg';
import { ReactComponent as PARASITE } from './icons/parasite.svg';
import { ReactComponent as PROTOZOAN } from './icons/protozoan.svg';
import { ReactComponent as DELETE } from './icons/delete.svg';
import Color from "color";
import DarkenColor from "./toolkit";

/*
{
    name: '',
    type: 0,
    color: ''
}
*/ 


class Properties extends React.Component {
    render() {
        return (<div className="menu">
            <div className="menu__title">Illness</div>
            {this.props.project.illness.map((e, i) => { return <Illness id={i} key={i} {...e} setProject={this.props.setProject}/> })}
        </div>);
    }
}

class Illness extends React.Component {
    render() {
        return (<div className="illness__conteiner">
            <div style={{ display: 'flex' }}>
                <div>
                    <button onClick={(event) => { document.getElementById(`Input__Color__${this.props.id}`).click(); }} style={{ backgroundColor: this.props.color, borderColor: DarkenColor(this.props.color, 1.3)}} className="illness__button">
                        {[<BACTERIUM className="illness__svg" />, <VIRUS className="illness__svg illness__icon__virus" />, <PARASITE className="illness__svg" />, <PROTOZOAN className="illness__svg" />][this.props.type % 4]}
                        <input type='color' onChange={(event) => {
                            this.props.setProject(v => {
                                let auxV = v;
                                console.log(new Color(auxV.illness[this.props.id].color).hsl())
                                auxV.illness[this.props.id].color = event.target.value;
                                return auxV;
                            })
                        }} value={this.props.color} id={`Input__Color__${this.props.id}`} /></button>
                </div>
                <div className="illness__name__conteiner">
                    <div className="illness__name"><input className="illness__name__input" value={this.props.name} onChange={(event) => {
                            this.props.setProject(v => {
                                let auxV = v;
                                auxV.illness[this.props.id].name = event.target.value;
                                return auxV;
                            })
                        }}/></div>
                    <div className="illness__type">
                        <select value={this.props.type} onChange={(event) => {
                            this.props.setProject(v => {
                                let auxV = v;
                                auxV.illness[this.props.id].type = Number(event.target.value);
                                return auxV;
                            })
                        }}>
                            {['bacterium', 'virus', 'parasite', 'protozoan'].map((e, i) => {
                                return <option key={i} value={i}>{e}</option>
                            })}
                        </select>
                    </div>

                </div>
            </div>
            <div className="illness__delete">
                <button><DELETE /></button>
            </div>
        </div>);
    }
}

export default Properties;