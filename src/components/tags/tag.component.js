import React from 'react';
import {StyledTag,StyledGoldenTag,TagContainer,StyledHR} from './tag.styles';

const TagLabel= () =>(
    <>
    <StyledHR/>
    <TagContainer>
<StyledGoldenTag to="/tags/gold/">gold</StyledGoldenTag>
<StyledTag to="/blog">all</StyledTag>
<StyledTag to="/tags/frontend/">frontend</StyledTag>
<StyledTag to="/tags/backend/">backend</StyledTag>
<StyledTag to="/tags/design/">design</StyledTag>
<StyledTag to="/tags/business/">business</StyledTag>
<StyledTag to="/tags/seo/">SEO</StyledTag>
<StyledTag to="/tags/ai/">AI</StyledTag>
<StyledTag to="/tags/self-development/">self development</StyledTag>
    </TagContainer>
    <StyledHR/>
    </>
)

export default TagLabel;