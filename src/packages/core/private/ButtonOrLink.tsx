import React from 'react'
import removeFocusOnMouseUp from '../../utils/removeFocusOnMouseUp'

export type ButtonOrLinkTypes = HTMLAnchorElement | HTMLButtonElement

export type Props = {
  [prop: string]: unknown
  /** Content within the button or link. */
  children: NonNullable<React.ReactNode>
  /** Whether the element is disabled. */
  disabled?: boolean
  /** Render as an anchor link with a URL. */
  href?: string
  /** Whether the element is loading. */
  loading?: boolean
  /** Callback fired when the element is clicked. */
  onClick?: (event: React.MouseEvent<ButtonOrLinkTypes>) => void
  /** Callback fired when the element is released. */
  onMouseUp?: (event: React.MouseEvent<ButtonOrLinkTypes>) => void
  /** When a link, open the target in a new window. */
  openInNewWindow?: boolean
  /** Rel attribute override for if the component has an href */
  rel?: string
  /** Add a data-tracking-name attribute. */
  trackingName?: string
  /** When a button, the type of button. */
  type?: 'button' | 'submit' | 'reset'
}

const ButtonOrLink: React.FC<Props> = ({
  afterIcon,
  beforeIcon,
  children,
  disabled = false,
  flexAlign,
  href = '',
  loading = false,
  openInNewWindow = false,
  rel,
  trackingName,
  type = 'button',
  onClick,
  onMouseUp,
  ...restProps
}) => {
  // Intercept click to handle disabled state
  const handleClick = (event: React.MouseEvent<ButtonOrLinkTypes>) => {
    if (disabled) {
      event.preventDefault()
    } else if (onClick) {
      onClick(event)
    }
  }

  // Remove outline after click
  const handleMouseUp = (event: React.MouseEvent<ButtonOrLinkTypes>) => {
    removeFocusOnMouseUp(event)

    if (onMouseUp) {
      onMouseUp(event)
    }
  }

  const Tag = href ? 'a' : 'button'
  const props: JSX.IntrinsicElements['a'] & JSX.IntrinsicElements['button'] = {}

  // Determine props based on element type
  if (href) {
    props.href = href
    props.rel = rel

    if (openInNewWindow) {
      props.target = '_blank'

      if (props.rel === undefined) {
        props.rel = 'noopener noreferrer'
      }
    }
  } else {
    props.disabled = disabled || loading || false
    props.type = type || 'button'
  }

  return (
    <Tag
      {...restProps}
      {...props}
      data-tracking-name={trackingName}
      onClick={handleClick}
      onMouseUp={handleMouseUp}
    >
      {children}
    </Tag>
  )
}

export default ButtonOrLink
