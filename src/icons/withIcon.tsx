import React, { SVGAttributes } from 'react'
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

export default function withIcon(name: string) {
  return (
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentType<WithIconWrapperProps> => {
    return function(props) {
      const defaultProps = {
        accessibilityLabel: props.accessibilityLabel
          ? props.accessibilityLabel
          : undefined,
        decorative: props.decorative ? props.decorative : undefined,
        color: props.color ? props.color : '#000',
        flip: props.flip ? props.flip : false,
        flipVertical: props.flipVertical ? props.flipVertical : false,
        inline: props.inline ? props.inline : false,
        size: props.size ? props.size : '24px',
      }

      const {
        accessibilityLabel,
        color,
        decorative,
        flip,
        flipVertical,
        inline,
        size,
      } = defaultProps

      const newProps: Props & {
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
        newProps['aria-hidden'] = true
      }

      if (accessibilityLabel) {
        newProps['aria-label'] = accessibilityLabel
      }

      return <WrappedComponent {...newProps} />
    }
  }
}
