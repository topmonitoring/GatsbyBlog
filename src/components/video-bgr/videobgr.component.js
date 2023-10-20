import React from 'react';
import Video from '../../../static/pexels-abhijit-rout-8125427 (2160p).mp4'
import { StyledVideo, HederOverlay,StyledLine,HederTextContainer,ButtonContainer } from './videobgr.styles';
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
      <h1>How big are yours?</h1>
      <p>The mission of this blog is to empower individuals to achieve their optimal physical and mental potential, by learning skills like programming, social development, and design. The end goal is a healthier life and brighter future for both themselves and humanity as a whole.</p>
      <br/>
      <ButtonContainer>
      <CustomButton to='/blog/welcome/'>Start Wining</CustomButton>
      <CustomButton to='/blog/from-dreams-to-deeds/'>I don't have goals</CustomButton>
      </ButtonContainer>
      </HederTextContainer>
      
      </HederOverlay>
      <StyledLine/>
    </>
  );
};
export default VideoBaground;
