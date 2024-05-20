import React from "react";
import ReactDOM from 'react-dom';
const Applayout=()=>{
    return(
        <div className=" justify-center items-center flex bg-white h-screen w-screen ">
                  <canvas width={450} height={450} className=" border border-black rounded"></canvas>
                  </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>)