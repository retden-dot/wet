const defaultState = { 
    data: {
        dt: 10000
    },
    city: [
        {
            lat: 55.55,
            lon: 55.55
        }
     ]
}


export const setData = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return{
                ...state, data: action.payload 
            }
        case 'ADD_CITY':
            return{
                ...state, payload: action.payload 
            }
        case 'ADD_CITY_INFO':
            return{
                ...state, nameCity: action.payload 
            }
        case 'ADD_INDEX_HOUR':
            return{
                ...state, index: action.payload 
            }
        default:
            return state;
    }
}