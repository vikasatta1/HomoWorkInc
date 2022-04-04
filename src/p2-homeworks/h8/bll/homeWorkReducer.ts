import {initialPeople, UserType} from "../HW8";
type ActionType = {type:'sort',payload: 'up'|"down"} | {type:'check',payload: number}
export const homeWorkReducer = (state = initialPeople, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState= [...state].sort((a,b)=>{
                if(a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === "up" ? newState : newState.reverse()
        }

        case 'check': {
            const copeState = [...state]
            const newState = copeState.filter(u=> u.age >= 18)
            return newState
        }
        default:
            return state
    }
}

