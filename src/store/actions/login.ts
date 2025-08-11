// Local imports
import { addToast } from '@/store/actions/addToast'
import { TOAST_TYPES } from '@/constants/TOAST_TYPES'
import * as API from '@/helpers/API'





/**
 * Sends the user to their OAuth login page.
 *
 * @param handle The user's ATproto handle.
 */
export async function login(handle: string) {
	const {
		data,
		errors,
	} = await API.getLoginURL(handle)

	if (errors?.length) {
		addToast({
			message: `Encountered the following error from the API:${errors.join('\n ・')}`,
			type: TOAST_TYPES.error,
		})
	} else if (data?.redirectURL) {
		window.location.href = data.redirectURL
	}
}
