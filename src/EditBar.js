import React, { useRef } from "react";
import { ReactComponent as ADDLOCATION } from './icons/add-location.svg';
import { ReactComponent as ADDROUTE } from './icons/add-route.svg';
import { ReactComponent as DOWNLOAD } from './icons/download.svg';
import { ReactComponent as UPLOADMAP } from './icons/upload-map.svg';

const EditBar = (props) => {

    const inputFileMap = useRef(null);

    const handleName = (event) => {
        props.setProject(v => {
            let newV = v;
            newV.name = event.target.value;
            return newV;
        });
    }

    const HandleExport = () => {
        const blob = new Blob([JSON.stringify(props.project, null, 2)], { type: "application/json" });
        const href = URL.createObjectURL(blob);

        const link = document.createElement('a');  
        link.href = href;
        link.download = `${props.project.name.replaceAll(' ', '_')}.json`;
        link.click();
    }

    const HandleUploadImage = (event) => {
        let img = new FileReader();
        img.readAsDataURL(event.target.files[0]);
        event.target.value = null;
        img.onload = () => {
            console.log(img.result);
            props.setProject((v) => {
                let newV = v;
                newV.boardBackground = img.result;
                return newV;
            });
        }
    }

    console.log(props.project);
    return (<div className="EditBar">
        <div>
            <input defaultValue={props.project.name} onChange={handleName} />
        </div>
        <div>
            <input type="file" ref={inputFileMap} accept="image/*" title="Upload Map" onChange={HandleUploadImage}></input>
            <button title="Upload Map" onClick={(event) => {inputFileMap.current.click();}}><UPLOADMAP /></button>
            <div/>
            <button title="New City"><ADDLOCATION /></button>
            <button title="New Route"><ADDROUTE /></button>
            <div/>
            <button title="Export Project" onClick={HandleExport}><DOWNLOAD /></button>
        </div>
    </div>);
}

export default EditBar;