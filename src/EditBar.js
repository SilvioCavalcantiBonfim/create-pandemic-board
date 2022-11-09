import React from "react";
import { ReactComponent as ADDLOCATION } from './icons/add-location.svg';
import { ReactComponent as ADDROUTE } from './icons/add-route.svg';
import { ReactComponent as DOWNLOAD } from './icons/download.svg';
import { ReactComponent as UPLOADMAP } from './icons/upload-map.svg';

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
            newV._system.action = (v._system.action === 1)? 0: 1;
            return newV;
        });
    }

    HandleRoutes = (event) => {
        this.props.setProject(v => {
            let newV = v;
            newV._system.action = (v._system.action === 2)? 0: 2;
            return newV;
        });
    }

    render() {
        return (
            <div className="EditBar">
                <div>
                    <span className="name__conteiner"><input defaultValue={this.props.project.name} onChange={this.handleName} className='name__update'/></span>
                </div>
                <div className="button__group__conteiner">
                    <input type="file" id="uploadImage" accept="image/*" title="Upload Map" onChange={this.HandleUploadImage}></input>
                    <button title="Upload Map" onClick={(event) => { document.getElementById('uploadImage').click(); }}><UPLOADMAP /></button>
                    <button title="New City" className={"state_"+Number(this.props.project._system.action === 1)} onClick={this.HandleCity}><ADDLOCATION /></button>
                    <button title="New Route" className={"state_"+Number(this.props.project._system.action === 2)} onClick={this.HandleRoutes}><ADDROUTE /></button>
                    <div />
                    <button title="Export Project" onClick={this.HandleExport}><DOWNLOAD /></button>
                </div>
            </div>
        )
    }
}

export default EditBar;