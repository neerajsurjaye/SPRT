import { useState } from "react";
import CameraConfig from "./CameraConfig";
import CreateObject from "./CreateObject";
import CreateMaterial from "./CrerateMaterial";

const ConfigForm = (props) => {
    let [objectConfigs, setObjectConfigs] = useState([]);
    let [materialConfigs, setMaterialConfigs] = useState([]);
    let [materialCount, setMaterialCount] = useState(0);
    let [objectCount, setObjectCount] = useState(0);

    const appendCreateObject = () => {
        setObjectCount(objectCount + 1);
        let newObject = (
            <CreateObject key={objectCount} idx={objectCount}></CreateObject>
        );
        setObjectConfigs([...objectConfigs, newObject]);
    };

    const appendCreateMaterial = () => {
        setMaterialCount(materialCount + 1);
        let newMaterial = (
            <CreateMaterial
                key={materialCount}
                idx={materialCount}
            ></CreateMaterial>
        );
        setMaterialConfigs([...materialConfigs, newMaterial]);
    };

    return (
        <form className="config-form">
            <div className="camera-config">
                <CameraConfig></CameraConfig>
            </div>

            <div className="config-create config-container">
                <h2 className="heading">WORLD</h2>
                <div className="button-wrapper">
                    <input
                        type="button"
                        value={"Create Object"}
                        onClick={() => appendCreateObject()}
                    />
                    <input
                        type="button"
                        value={"Create Material"}
                        onClick={() => appendCreateMaterial()}
                    />
                </div>
            </div>

            <div className="config-objects config-container">
                <h4 className="heading">OBJECTS</h4>
                {objectConfigs}
            </div>
            <div className="config-materials config-container">
                <h4 className="heading">MATERIALS</h4>
                {materialConfigs}
            </div>
        </form>
    );
};
export default ConfigForm;
