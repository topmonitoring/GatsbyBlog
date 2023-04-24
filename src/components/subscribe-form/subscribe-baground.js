import React from 'react'
import{StyledBackgroundSection,StyledHeroContent} from "./subscribe-form.styles"
import {StaticImage} from 'gatsby-plugin-image'

const BackgroundSection = ({ className, children }) => {
return ( 
    <StyledBackgroundSection>
    <StaticImage className={className} src="../../assets/subscribebaground3.png"
     alt="subscribe form"
     layout='fullWidth' 
     formats={["auto", "webp", "avif"]} 
     style={{gridArea: "1/1"}}/>
    <StyledHeroContent style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}>
      {children}
    </StyledHeroContent>
    </StyledBackgroundSection>
    
  )
}

export default BackgroundSection






