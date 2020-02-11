/** @jsx jsx */
import React, { SVGAttributes } from 'react'
import { jsx } from '@emotion/core'

export type WithIconWrapperProps = {
  /** Accessibility label. Required if `decorative` not defined. */
  accessibilityLabel?: string
  /** Mark as decorative only and avoid accessibility. Required if `accessibilityLabel` not defined. */
  decorative?: boolean
  /** Flip the icon on the horizontal axis. */
  flip?: boolean
  /** Flip the icon on the vertical axis. */
  flipVertical?: boolean
  /** Size of the icon. */
  size?: number | string
  /** Color the icon using a CSS hexcode. */
  color?: string
  /** Render as inline instead of block. */
  inline?: boolean
}

export type Props = {
  focusable: SVGAttributes<unknown>['focusable']
  role: string
  style: React.CSSProperties
}

export default function withIcon(
  name: string
): (
  WrappedComponent: React.ComponentType<Props>
) => React.ComponentType<WithIconWrapperProps> {
  return WrappedComponent =>
    class Icon extends React.Component<WithIconWrapperProps> {
      static displayName = name

      static WrappedComponent = WrappedComponent

      static defaultProps = {
        color: '#333333',
        flip: false,
        flipVertical: false,
        inline: false,
        size: '24px',
      }

      render() {
        const {
          accessibilityLabel,
          color,
          decorative,
          flip,
          flipVertical,
          inline,
          size,
        } = this.props

        const props: Props & {
          'aria-hidden'?: boolean
          'aria-label'?: string
        } = {
          focusable: 'false',
          role: decorative ? 'presentation' : 'img',
          style: {
            height: size,
            width: size,
            display: inline ? 'inline' : 'block',
            fill: color,
            transform:
              flip || flipVertical
                ? `scale(${flip ? -1 : 1}, ${flipVertical ? -1 : 1})`
                : 'scale(1)', // keep scale(1) for transition flipping
            transition: 'transform 300ms ease-out',
          },
        }

        if (decorative) {
          props['aria-hidden'] = true
        }

        if (accessibilityLabel) {
          props['aria-label'] = accessibilityLabel
        }

        return <WrappedComponent {...props} />
      }
    }
}
