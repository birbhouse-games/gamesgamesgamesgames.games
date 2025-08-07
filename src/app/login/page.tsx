'use client'

// Local imports
import { Button } from '@/components/Button/Button'
import * as API from '@/helpers/API'





export default function LoginPage() {
	const handleSubmit = (formData: FormData) => {
		const handle = formData.get('handle')

		if (typeof handle !== 'string') {
			throw new Error('handle must be a string')
		}

		API.login(handle, '/dashboard')
	}

	return (
		<form action={handleSubmit}>
			<input
				name={'handle'}
				placeholder={'gamesgamesgamesgames.games'}
				type={'text'} />

			<Button type={'submit'}>{'Login'}</Button>
		</form>
	)
}
