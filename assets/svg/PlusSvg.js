import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const PlusSvg = props => (
  <Svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M6.046 11.833a.804.804 0 0 1-.593-.24.804.804 0 0 1-.24-.593V6.833H1.046a.807.807 0 0 1-.594-.24A.806.806 0 0 1 .212 6c0-.236.08-.434.24-.594.16-.16.358-.24.594-.24h4.167V1c0-.236.08-.434.24-.594.16-.16.357-.24.593-.24s.434.08.594.24c.16.16.24.358.24.594v4.167h4.166c.236 0 .434.08.594.239.16.16.24.358.24.594s-.08.434-.24.593a.804.804 0 0 1-.594.24H6.88V11c0 .236-.08.434-.24.593a.807.807 0 0 1-.594.24Z"
      fill="#626D7C"
    />
  </Svg>
);

export default PlusSvg;
