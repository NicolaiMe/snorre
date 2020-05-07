/** @jsx jsx */
import React, { SVGAttributes } from 'react'
import { jsx } from '@emotion/core'
import { SvgTheme, withoutBackground } from './styles'
export type WithIllustrationWrapperProps = {
  /** Accessibility label. Required if `decorative` not defined. */
  accessibilityLabel?: string
  /** Mark as decorative only and avoid accessibility. Required if `accessibilityLabel` not defined. */
  decorative?: boolean
  /** Flip the icon on the horizontal axis. */
  flip?: boolean
  /** Flip the icon on the vertical axis. */
  flipVertical?: boolean
  /** Should add background. */
  withBackground?: boolean
  /** SVG width */
  width?: string
  /** SVG height */
  height?: string
}

export type Props = {
  focusable: SVGAttributes<unknown>['focusable']
  role: string
  style: React.CSSProperties
}

export default function withIllustration(name: string) {
  return (
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentType<WithIllustrationWrapperProps> => {
    return function(props) {
      const defaultProps = {
        accessibilityLabel: props.accessibilityLabel
          ? props.accessibilityLabel
          : undefined,
        decorative: props.decorative ? props.decorative : undefined,
        flip: props.flip ? props.flip : false,
        flipVertical: props.flipVertical ? props.flipVertical : false,
        withBackground: props.withBackground ? props.withBackground : false,
        height: props.height ? props.height : '100%',
        width: props.width ? props.width : '100%',
      }

      const {
        accessibilityLabel,
        decorative,
        flip,
        flipVertical,
        height,
        width,
      } = defaultProps

      const newProps: Props & {
        'aria-hidden'?: boolean
        'aria-label'?: string
      } = {
        focusable: 'false',
        role: decorative ? 'presentation' : 'img',
        style: {
          transform:
            flip || flipVertical
              ? `scale(${flip ? -1 : 1}, ${flipVertical ? -1 : 1})`
              : 'scale(1)', // keep scale(1) for transition flipping
          transition: 'transform 300ms ease-out',
          height,
          width,
        },
      }

      if (decorative) {
        newProps['aria-hidden'] = true
      }

      if (accessibilityLabel) {
        newProps['aria-label'] = accessibilityLabel
      }

      return (
        <div
          css={theme => [
            SvgTheme(theme),
            defaultProps.withBackground && withoutBackground,
          ]}
        >
          <WrappedComponent {...newProps} />
        </div>
      )
    }
  }
}
