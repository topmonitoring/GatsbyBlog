import React from 'react';
import Video from '../../../static/pexels-michal-marek-1409899-3840x2160-25fps.mp4'
import { StyledVideo, HederOverlay,StyledLine,HederTextContainer } from './videobgr.styles';
import CustomButton from '../buttons/CustomButton';

const VideoBaground = () => {
  return (
    <>
    <StyledLine/>
      <StyledVideo>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          width="1800"
          height="700"
        >
          <source
            src={Video}
            type="video/mp4"
          />
        </video>
      </StyledVideo>
      <HederOverlay>
      <HederTextContainer>
      <h1>Welcome to Pirate Cactus</h1>
      <p>This blog's purpose is to educate users and allow programmers, business owners, and entrepreneurs to discover practical solutions and new technologies in a fast and efficient manner</p>
      <br/>
      <CustomButton to='/blog/welcome/'>Start here</CustomButton>
      </HederTextContainer>
      
      </HederOverlay>
      <StyledLine/>
    </>
  );
};
export default VideoBaground;
