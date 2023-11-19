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
      <p>Drive more traffic to your business by creating more pleasant and visually appealing websites. Boost your marketing with AI tools. Learn valuable information about your ideal customer. </p>
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
