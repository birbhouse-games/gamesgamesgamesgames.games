export interface JSONAPIResponse<DataShape = Record<string, unknown>> {
	data?: DataShape
	errors?: string[]
	jsonapi: {
		version: string
	}
	meta: {
		endMS: number
		responseMS: number
		startMS: number
	}
}
