import AnimatedBox, { AnimatedBoxProps } from '@atoms/AnimatedBox'
import Bar from '@atoms/Bar'
import * as React from 'react'

const HeaderBar: React.FC<AnimatedBoxProps> = ({ children, ...props }) => {
  return (
    <AnimatedBox position="absolute" top={0} left={0} right={0} {...props}>
      <Bar
        variant="headerBar"
        flexDirection="row"
        alignItems="center"
        mx="lg"
        my="md"
        minHeight={44}
      >
        {children}
      </Bar>
    </AnimatedBox>
  )
}

export default HeaderBar
