// Module imports
import {
  type FocusEventHandler,
  type MouseEventHandler,
  type PropsWithChildren,
} from 'react'
import classnames from 'classnames'





// Local imports
import { Link } from '@/components/Link/Link'

import styles from './Button.module.scss'





// Types
type Props = Readonly<PropsWithChildren<{
  className?: string,
  hideOverflow?: boolean,
  href?: string,
  isPrimary?: boolean,
  onBlur?: FocusEventHandler<HTMLButtonElement>,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  onFocus?: FocusEventHandler<HTMLButtonElement>,
  type?: 'button' | 'reset' | 'submit',
}>>





export function Button(props: Props) {
  const {
    children = null,
    className = '',
    hideOverflow = true,
    href,
    isPrimary = false,
    onBlur,
    onClick,
    onFocus,
    type = 'button',
  } = props

  const compiledClassName = classnames({
    [styles['button']]: true,
    [styles['hide-overflow']]: hideOverflow,
    [styles['is-primary']]: isPrimary,
  }, className)

  if (href) {
    return (
      <Link
        className={compiledClassName}
        href={href}>
        <span>{children}</span>
      </Link>
    )
  }

  return (
    <button
      className={compiledClassName}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      type={type}>
      <span>{children}</span>
    </button>
  )
}
