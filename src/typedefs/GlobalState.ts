// Module imports
import { type AppBskyActorProfile } from '@atproto/api'





// Local imports
import { type ToastData } from '@/typedefs/ToastData'





export interface GlobalState {
	authToken: string | null
	isAuthenticated: boolean
	isCheckingAuthentication: boolean
	isRetrievingProfile: boolean
	toastQueue: Array<ToastData>
	userProfile: AppBskyActorProfile.Record | null
}
