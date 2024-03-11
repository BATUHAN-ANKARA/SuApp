import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const OnBoardFirstSvg = props => (
  <Svg
    width={270}
    height={286}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      opacity={0.1}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M133.997 0c32.568.068 61.09 18.815 85.066 41.954 25.293 24.41 50.891 53.234 50.937 89.303.046 36.098-27.268 63.133-50.71 89.542-24.725 27.855-49.21 59.84-85.293 63.677-38.761 4.122-78.272-13.267-104.52-43.493C4.186 211.856-2.81 170.472.95 131.257c3.393-35.398 22.948-65.297 47.643-89.66C72.367 18.143 101.373-.068 133.997 0Z"
      fill="#4CC4DE"
    />
    <Path
      d="M130.889 91.142c-25.285 2.1-45.229 23.522-45.229 49.34v.718a4.112 4.112 0 0 0 1.542 3.865l25.869 20.698v22.689c0 6.8 5.535 12.335 12.335 12.335h19.188c6.801 0 12.335-5.535 12.335-12.335v-22.689l25.869-20.698a4.104 4.104 0 0 0 1.542-3.871v-.712c0-25.818-19.944-47.24-45.228-49.34 4.408 2.996 15.076 10.795 15.076 39.746a4.113 4.113 0 0 1-4.112 4.112 4.113 4.113 0 0 1-4.111-4.112c0-22.625-7.486-29.875-10.976-32.893-3.448 2.988-10.953 10.232-10.953 32.893a4.113 4.113 0 0 1-4.112 4.112 4.113 4.113 0 0 1-4.112-4.112c0-28.951 10.669-36.75 15.077-39.746Zm-26.041 46.599c8.09 0 11.228 5.649 11.377 5.927l7.002 16.002h-4.599l-23.112-18.486c1.753-1.628 4.702-3.443 9.332-3.443Zm30.152 0c5.706 0 8.919 2.797 10.392 4.556l-7.603 17.373h-5.578l-7.608-17.384c1.457-1.758 4.643-4.545 10.397-4.545Zm30.152 0c4.594 0 7.551 1.823 9.316 3.453l-23.096 18.476h-4.599l7.003-16.008c.08-.156 3.119-5.921 11.376-5.921Zm-34.263 32.893h8.223a4.113 4.113 0 0 1 0 8.224h-8.223a4.111 4.111 0 1 1 0-8.224Z"
      fill="#4CC4DE"
    />
  </Svg>
);

export default OnBoardFirstSvg;