import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { SvgPropsType } from './types';

const BubbleSubstractDown: React.FC<SvgPropsType> = ({ style }) => (
  <Svg style={style} width="6" height="6" viewBox="0 0 6 6" fill="none">
    <G clip-path="url(#clip0)">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 6L6 0L0 -2.62268e-07C3.31371 -1.17422e-07 6 2.68629 6 6Z"
        fill="#C4C4C4"
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="6" height="6" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BubbleSubstractDown;
