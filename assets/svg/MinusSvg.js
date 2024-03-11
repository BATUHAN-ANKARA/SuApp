import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MinusSvg = props => (
  <Svg
    width={13}
    height={2}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      opacity={0.8}
      stroke="#626D7C"
      strokeWidth={2}
      strokeLinecap="round"
      d="M1.047 1h10"
    />
  </Svg>
);

export default MinusSvg;
