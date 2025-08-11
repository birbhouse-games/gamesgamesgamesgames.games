'use client'

// Module imports
import { useState } from 'react'





// Local imports
import { Button } from '@/components/Button/Button'
import { login } from '@/store/actions/login'





export default function LoginPage() {
	const [isLoggingIn, setIsLoggingIn] = useState(false)

	const handleSubmit = (formData: FormData) => {
		setIsLoggingIn(true)

		const handle = formData.get('handle')

		if (typeof handle !== 'string') {
			setIsLoggingIn(false)
			throw new Error('handle must be a string')
		}

		login(handle.replace(/^@/u, ''))
	}

	return (
		<form action={handleSubmit}>
			<input
				disabled={isLoggingIn}
				name={'handle'}
				placeholder={'@gamesgamesgamesgames.games'}
				type={'text'} />

			<Button
				isDisabled={isLoggingIn}
				type={'submit'}>{'Login'}</Button>
		</form>
	)
}
