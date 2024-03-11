import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PaymentDealerSvg = props => (
  <Svg
    width={17}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m15.583 7.417 1.167 1.175-5.442 5.491-2.891-2.916 1.166-1.175 1.725 1.733 4.275-4.308ZM7.167.333a3.333 3.333 0 1 1 0 6.667 3.333 3.333 0 0 1 0-6.667Zm0 1.667a1.667 1.667 0 1 0 0 3.333 1.667 1.667 0 0 0 0-3.333Zm0 5.833c.566 0 1.25.075 2.008.217L7.783 9.442l-.616-.025c-2.475 0-5.084 1.216-5.084 1.75v.916H7.25l1.583 1.584H.5v-2.5c0-2.217 4.442-3.334 6.667-3.334Z"
      fill="#626D7C"
    />
  </Svg>
);

export default PaymentDealerSvg;
