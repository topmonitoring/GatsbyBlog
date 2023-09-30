import React from 'react';
import Video from '../../../static/pexels-abhijit-rout-8125427 (2160p).mp4'
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
      <h1>You are as big as your Goals,</h1>
      <h1> How big are yours?</h1>
      <p> This blog's purpose is to educate entrepreneurs, programmers and business owners to discover practical solutions and new technologies in a fast and efficient manner compleatly for free</p>
      <br/>
      <CustomButton to='/blog/welcome/'>Start here</CustomButton>
      </HederTextContainer>
      
      </HederOverlay>
      <StyledLine/>
    </>
  );
};
export default VideoBaground;
