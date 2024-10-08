import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const BackArrowIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#1C1B1F"
      d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z"
    />
  </Svg>
)
export default BackArrowIcon
