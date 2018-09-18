const defaultState = {
    userAuth: {
        token: ""
    }
}

interface Iaction { type: string, payload: any }

export default function(state = defaultState, action:Iaction) {
    switch(action.type) {
        default: return state;
    }
}

