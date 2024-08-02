import React from 'react'
import "./StyleMainBanner.css"

import { CopyPaste, DownloadSvg, YoutubeSvg } from '../../Svg'
function MainBanner() {
  return (
    <div className='MainBanner'>
        <div className='box'>
            <div className='banner'>
                <CopyPaste fill={"#fff"} width={90} height={90}/>
            </div>
            <div className='head'>
                <p><span>1.</span> Paste Video Link </p>
            </div>
            <div className='desc'>
                <p>Paste link YouTube or enter keyword into the search box.</p>
            </div>
        </div>
        <div className='box'>
            <div className='banner'>
                <YoutubeSvg fill={"#fff"} width={90} height={90}/>
            </div>
            <div className='head'>
                <p><span>2. </span>Select Video</p>
            </div>
            <div className='desc'>
                <p>Select the format you want and then click the Download button.</p>
            </div>
        </div>
        <div className='box'>
            <div className='banner'>
                <DownloadSvg fill={"#fff"} width={90} height={90}/>
            </div>
            <div className='head'>
                <p><span>3. </span> Download Video </p>
            </div>
            <div className='desc'>
                <p>Wait a few seconds for the conversion to complete and click Download to download the file to your device.</p>
            </div>
        </div>
    </div>
  )
}

export default MainBanner