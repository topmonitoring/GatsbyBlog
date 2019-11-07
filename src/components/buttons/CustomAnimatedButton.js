import React, { useState } from "react";
import { useSpring } from "react-spring";
import { AnimatedButton, StyledLink } from "./CustomButtonStyles";

const CustomAnimatedButton = ({ children, to, ...OtherProps }) => {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 }
  });
  return (
    <StyledLink to={to}>
      <AnimatedButton
        onClick={() => toggle(!state)}
        {...OtherProps}
        style={{
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
            })
            .interpolate(x => `scale(${x})`)
        }}
      >
        {children}
      </AnimatedButton>
    </StyledLink>
  );
};

export default CustomAnimatedButton;
