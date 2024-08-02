import React, { useEffect, useMemo, useState } from "react";
import "./StyleProgress.css";

import ProgressBar from "@ramonak/react-progress-bar";
import { useDispatch,useSelector } from "react-redux";

import { bytesToSize } from "../../constants/Functions/bytestoMB";
function Progress() {

  const {currentSize,totalSize}  = useSelector(state=>state.getProgress)

  const progressdisplay=(currentSize,totalSize)=>{
    if(currentSize > 0 && totalSize > 0){
      const percent = Math.floor((currentSize/totalSize)*100)
      return percent<=100?percent:100
    }
    return 0
  }


  return (
    <div className="Progress">
      <div className="component">
        <p>Grab a coffee! We're working on your download...</p>
        <ProgressBar
          completed={progressdisplay(currentSize,totalSize)}
          maxCompleted={100}
          bgColor="#00494A"
          baseBgColor="#B2F1F2"
          className="bar"
          height="18px"
          labelSize="12px"
        />
      </div>
    </div>
  );
}

export default Progress;
