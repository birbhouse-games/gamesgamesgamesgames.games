// Local imports
import { type GlobalState } from '../typedefs/GlobalState'





export const INITIAL_STATE: GlobalState = {
	authToken: null,
	isAuthenticated: false,
	isCheckingAuthentication: true,
	isRetrievingProfile: false,
	userProfile: null,
}
