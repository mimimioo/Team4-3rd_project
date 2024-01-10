import React, {useRef} from 'react';
import styled from "styled-components";

const BackgroundVideo = () => {
    const videoRef= useRef(null);
    const setPlayBackRate = () => {
        videoRef.current.playbackRate = 0.7;
    };
    return (
        <div className="mainBackground">
            <BgcVideo>
                <Video muted autoPlay ref={videoRef} onCanPlay={() => setPlayBackRate()}>
                    <source src={"./videos/fish.mp4"} type="video/mp4" />
                </Video>
                <BgcCover></BgcCover>
            </BgcVideo>
        </div>
    );
};
export default BackgroundVideo;

const BgcVideo = styled.div`
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
`
const BgcCover = styled.div`
  background-color: rgba(0, 0, 0, 0.50);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`
const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: fill;
`