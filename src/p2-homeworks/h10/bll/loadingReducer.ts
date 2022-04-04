const initState = {
loading:false
}

export const loadingReducer = (state= initState, action: ActionType):typeof initState=> { // fix any
    switch (action.type) {
        case 'SET-PRELOADER': {
            return {
                ...state,
                loading: action.loading
            }

        }
        default: return state
    }
}

export const loadingAC = (loading:boolean): any => ({type:"SET-PRELOADER",loading}as const )// fix any
type ActionType = ReturnType<typeof loadingAC>