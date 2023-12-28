import createDataContext from "./createDataContext";

const dataReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_data':
            return { ...state, data: action.payload }
        default:
            return state
    }
}

const fetchEvents = dispatch => async () => {
    try {
        const response = await fetch(`${process.env.DOMAIN}/api/events`)
        const resData = await response.json()
        dispatch({ type: 'fetch_data', payload: resData?.events })
    } catch (err) {
        console.error('somethng went wrong')
    }
}

const fetchWorkshops = dispatch => async () => {
    try {
        const response = await fetch(`${process.env.DOMAIN}/api/workshops`)
        const resData = await response.json()
        dispatch({ type: 'fetch_data', payload: resData?.workshops })
    } catch (err) {
        console.error('somethng went wrong')
    }
}

export const { Provider, Context } = createDataContext(dataReducer, { fetchEvents, fetchWorkshops }, { data: [] })