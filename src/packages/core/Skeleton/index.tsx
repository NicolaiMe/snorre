import React from 'react'
import { SkeletonRow, SkeletonCircle, SkeletonRectangle } from './styles'

export interface IProps {
  circle?: boolean
  height?: string
  width?: string
  rectangle?: boolean
  borderRadius?: string
}

const Skeleton: React.FC<IProps> = ({
  circle = false,
  height = undefined,
  width = undefined,
  rectangle = false,
  borderRadius = undefined,
}) => {
  if (circle) {
    return <SkeletonCircle height={height} width={width} />
  }
  if (rectangle) {
    return (
      <SkeletonRectangle
        borderRadius={borderRadius}
        height={height}
        width={width}
      />
    )
  }
  return <SkeletonRow height={height} width={width}></SkeletonRow>
}

export default Skeleton
