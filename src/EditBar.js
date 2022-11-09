import React from "react";
import { ReactComponent as ADDLOCATION } from './icons/add-location.svg';
import { ReactComponent as ADDROUTE } from './icons/add-route.svg';
import { ReactComponent as DOWNLOAD } from './icons/download.svg';
import { ReactComponent as UPLOADMAP } from './icons/upload-map.svg';
import { ReactComponent as CAPTALON } from './icons/captal-on.svg';
import { ReactComponent as CAPTALOFF } from './icons/captal-off.svg';

class EditBar extends React.Component {

    handleName = (event) => {
        this.props.setProject(v => {
            let newV = v;
            newV.name = event.target.value;
            return newV;
        });
    }

    HandleUploadImage = (event) => {
        let img = new FileReader();
        img.readAsDataURL(event.target.files[0]);
        event.target.value = null;
        img.onload = () => {
            this.props.setProject((v) => {
                let newV = v;
                newV.boardBackground = img.result;
                return newV;
            });
        }
    }

    HandleExport = () => {
        const blob = new Blob([JSON.stringify(this.props.project, null, 2)], { type: "application/json" });
        const href = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = href;
        link.download = `${this.props.project.name.replaceAll(' ', '_')}.json`;
        link.click();
    }

    HandleCity = (event) => {
        this.props.setProject(v => {
            let newV = v;
            newV._system.action = (v._system.action === 1) ? 0 : 1;
            return newV;
        });
    }

    HandleRoutes = (event) => {
        this.props.setProject(v => {
            let newV = v;
            newV._system.action = (v._system.action === 2) ? 0 : 2;
            return newV;
        });
    }

    HandleIsCaptal = (event) => {
        this.props.setProject(v => {
            let newV = v;
            newV._system.isCaptal = Number(event.target.checked);
            return newV;
        });
    }

    HandleCurrentColor = (event) => {
        this.props.setProject(v => {
            let newV = v;
            newV._system.currentColor = Number(event.target.value);
            return newV;
        });
    }

    HandlewidthRoutes = (event) => {
        this.props.setProject(v => {
            let newV = v;
            newV.widthRoutes = Number(event.target.value);
            return newV;
        });
    }

    HandleColorRoutes = (event) => {
        this.props.setProject(v => {
            let newV = v;
            newV.colorRoutes = event.target.value;
            return newV;
        });
    }
    render() {
        return (
            <div className="EditBar">
                <div>
                    <span className="name__conteiner"><input defaultValue={this.props.project.name} onChange={this.handleName} className='name__update' /></span>
                </div>
                {(this.props.project._system.action === 1) ? <div className="button__group__conteiner">
                    <label>Captal: </label>
                    <input id="isCaptal" type="checkbox" onChange={this.HandleIsCaptal} style={{ display: 'none' }} />
                    <button onClick={(event) => { document.getElementById('isCaptal').click(); }} className={`state_${this.props.project._system.isCaptal}`}>{[<CAPTALOFF />, <CAPTALON />][this.props.project._system.isCaptal]}</button>
                    <label>Illness: </label><div className="button__group__capsule">
                        <select onChange={this.HandleCurrentColor} value={this.props.project._system.currentColor}>{this.props.project.illness.map((e, i) => <option key={i} value={i} style={{ color: e.color }}>{e.name}</option>)}</select>
                    </div>
                </div> : (this.props.project._system.action === 2) ? <div className="button__group__conteiner">
                    <label>Route Color: </label>
                    <button style={{backgroundColor: this.props.project.colorRoutes}} onClick={(event) => { document.getElementById('routeColor').click();}}>
                        <input type='color' id="routeColor" onChange={this.HandleColorRoutes}/>
                    </button>
                    <label>width Routes: </label>
                    <input type="number" min='1' max='10' value={this.props.project.widthRoutes} onChange={this.HandlewidthRoutes}/>
                </div> : <div />}
                <div className="button__group__conteiner">
                    <input type="file" id="uploadImage" accept="image/*" title="Upload Map" onChange={this.HandleUploadImage}></input>
                    <button title="Upload Map" onClick={(event) => { document.getElementById('uploadImage').click(); }}><UPLOADMAP /></button>
                    <button title="New City" className={"state_" + Number(this.props.project._system.action === 1)} onClick={this.HandleCity}><ADDLOCATION /></button>
                    <button title="New Route" className={"state_" + Number(this.props.project._system.action === 2)} onClick={this.HandleRoutes}><ADDROUTE /></button>
                    <div />
                    <button title="Export Project" onClick={this.HandleExport}><DOWNLOAD /></button>
                </div>
            </div>
        )
    }
}

export default EditBar;