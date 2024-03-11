import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BlackPointSvg = props => (
  <Svg
    width={28}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M28 26.923C28 34.145 21.732 40 14 40S0 34.145 0 26.923C0 19.701 14 0 14 0s14 19.7 14 26.923Z"
      fill="#00081C"
    />
  </Svg>
);

export default BlackPointSvg;
