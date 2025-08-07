// Module imports
import { type AppBskyActorProfile } from '@atproto/api'





export interface GlobalState {
	authToken: string | null
	isAuthenticated: boolean
	isCheckingAuthentication: boolean
	isRetrievingProfile: boolean
	userProfile: AppBskyActorProfile.Record | null
}
