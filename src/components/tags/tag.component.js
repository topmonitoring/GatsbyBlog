import React from 'react';
import {StyledTag,TagContainer} from './tag.styles';

const TagLabel= () =>(
    <TagContainer>
<StyledTag to="/blog">all</StyledTag>
<StyledTag to="/tags/javascript/">javascript</StyledTag>
<StyledTag to="/tags/seo/">SEO</StyledTag>
<StyledTag to="/tags/design/">design</StyledTag>
<StyledTag to="/tags/frontend/">frontend</StyledTag>
<StyledTag to="/tags/backend/">backend</StyledTag>
    </TagContainer>
)

export default TagLabel;