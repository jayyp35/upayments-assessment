import CONSTANTS from './constants'

export const setLoading = (payload) => {
    return {
        type: CONSTANTS.SET_LOADING,
        payload
    }
}