import { channel } from "diagnostics_channel";

const { contextBridge  , ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
})

contextBridge.exposeInMainWorld('api' , {
	on : (channel: any , func : any) => {ipcRenderer.on(channel , func)}
});

contextBridge.exposeInMainWorld('sprt', {
  render : async ()=>{
	try{
	  let image = await ipcRenderer.invoke('render');
	  return image;
	}catch(error){
	  console.error(error);   
	}
  }
})