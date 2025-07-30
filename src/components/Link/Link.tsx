// Module imports
import {
	type MouseEventHandler,
	type PropsWithChildren,
} from 'react'
import classnames from 'classnames'
import NextLink from 'next/link'





// Local imports
import { ExternalLink } from '@/components/ExternalLink/ExternalLink'

import styles from './Link.module.scss'




// Types
type Props = PropsWithChildren<{
	className?: string,
	href?: string,
	isActive?: boolean,
	onClick?: MouseEventHandler<HTMLAnchorElement>,
	showActive?: boolean,
}>





export function Link(props: Props) {
	const {
		children,
		className = '',
		href,
		isActive,
		onClick,
		showActive = false,
	} = props

	const compiledClassName = classnames(styles['link'], className, {
		[styles['is-active']]: showActive && isActive,
	})

	if ((href?.startsWith('/')) || (href?.startsWith('#'))) {
		return (
			<NextLink
				className={compiledClassName}
				href={href}
				onClick={onClick}>
				{children}
			</NextLink>
		)
	}

	return (
		<ExternalLink
			className={compiledClassName}
			href={href}
			onClick={onClick}>
			{children}
		</ExternalLink>
	)
}
