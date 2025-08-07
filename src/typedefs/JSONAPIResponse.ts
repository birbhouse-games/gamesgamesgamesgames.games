export interface JSONAPIResponse<DataShape = Record<string, unknown>> {
	data: DataShape
	jsonapi: {
		version: string
	}
	meta: {
		endMS: number
		responseMS: number
		startMS: number
	}
}
