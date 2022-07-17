// quick and dirty one reducer for now
const initialState = {
    currentUser: {}
}

export default function reducer(state  = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload.user}
        default:
            return state;
    }
}