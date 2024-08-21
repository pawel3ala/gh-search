import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const StarIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#1C1B1F"
      d="m12 17.77 6.18 3.73-1.64-7.03L22 9.74l-7.19-.61L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77Z"
    />
  </Svg>
)
export default StarIcon
