// Module imports
import { makeStore } from 'statery'





// Local imports
import { INITIAL_STATE } from './INITIAL_STATE'





export const store = makeStore(INITIAL_STATE)

// @ts-expect-error Fuck it.
window.store = store
