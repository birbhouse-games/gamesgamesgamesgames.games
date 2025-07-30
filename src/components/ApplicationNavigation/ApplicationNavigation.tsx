// Local imports
import { Link } from '@/components/Link/Link'





export function ApplicationNavigation() {
	return (
		<nav>
			<Link href={'/'}>{'Home'}</Link>{' | '}
			<Link href={'/about'}>{'About'}</Link>
		</nav>
	)
}
