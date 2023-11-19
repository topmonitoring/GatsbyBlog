import React from 'react';
import Video from '../../../static/pexels-abhijit-rout-8125427 (2160p).mp4'
import { StyledVideo, HederOverlay,StyledLine,HederTextContainer,ButtonContainer,StrongWord } from './videobgr.styles';
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
      <h1>Attention is the new<StrongWord> world currency</StrongWord></h1>
      <h2>Are you geting yours?</h2>
      <p>We help companies grow, offer more value, and make life better for individuals, leading to healthier, brighter future for humanity one person at a time.We believe in action, better world is out there, all you need to do is choose it.</p>
      <br/>
      <ButtonContainer>
      <CustomButton to='/blog/welcome/'>Learn How</CustomButton>
      </ButtonContainer>
      </HederTextContainer>
      
      </HederOverlay>
      <StyledLine/>
    </>
  );
};
export default VideoBaground;
