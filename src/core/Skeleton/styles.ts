import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { IProps } from '.'

const shimmerBg = '#eee'

const defaultShimmer = styled.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  background-color: ${shimmerBg};

  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent,
      rgb(229, 227, 223),
      transparent
    );
    animation: loading 1.5s infinite;

    animation: ${keyframes`
    100% {
      transform: translateX(100%);
    }
  `} 1.5s infinite;
  }
`

export const SkeletonRow = styled(defaultShimmer)<IProps>`
  height: ${props => (props.height ? props.height : '1em')};
  width: ${props => (props.width ? props.width : '65%')};
`

export const SkeletonCircle = styled(defaultShimmer)<IProps>`
  height: ${props => (props.height ? props.height : '34px')};
  width: ${props => (props.width ? props.width : '34px')};
  border-radius: 50%;
`

export const SkeletonRectangle = styled(defaultShimmer)<IProps>`
  height: ${props => (props.height ? props.height : '34px')};
  width: ${props => (props.width ? props.width : '34px')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '0')};
`
