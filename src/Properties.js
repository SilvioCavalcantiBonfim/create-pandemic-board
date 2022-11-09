import React from "react";
import { ReactComponent as VIRUS } from './icons/virus.svg';
import { ReactComponent as BACTERIUM } from './icons/bacterium.svg';
import { ReactComponent as PARASITE } from './icons/parasite.svg';
import { ReactComponent as PROTOZOAN } from './icons/protozoan.svg';
import { ReactComponent as DELETE } from './icons/delete.svg';

class Properties extends React.Component {
    render() {
        return (<div className="menu">
            <div className="menu__title">Illness</div>
            {[...new Array(4)].map((e, i) => { return <Illness id={i} key={i} type={Math.floor(Math.random() * 4)} color={`hsl(${Math.floor(Math.random() * 360)},80%,75%)`} /> })}
        </div>);
    }
}

class Illness extends React.Component {

    state = {
        color: this.props.color,
        type: this.props.type
    }

    render() {
        return (<div className="illness__conteiner">
            <div style={{ display: 'flex' }}>
                <div>
                    <button onClick={(event) => { document.getElementById(`Input__Color__${this.props.id}`).click(); }} style={{ backgroundColor: this.state.color }}>
                        {[<BACTERIUM className="illness__svg" />, <VIRUS className="illness__icon__virus" />, <PARASITE className="illness__svg" />, <PROTOZOAN className="illness__svg" />][this.state.type % 4]}
                        <input type='color' onChange={(event) => {
                            this.setState({ color: event.target.value })
                        }} value={this.state.color} id={`Input__Color__${this.props.id}`} /></button>
                </div>
                <div className="illness__name__conteiner">
                    <div className="illness__name"><input className="illness__name__input" defaultValue={"name"}/></div>
                    <div className="illness__type">
                        <select value={this.state.type} onChange={(event) => {
                            this.setState(v => {
                                return v.type = event.target.value;
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