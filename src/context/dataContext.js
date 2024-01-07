import createDataContext from "./createDataContext";

const dataReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_events':
            return {
                ...state,
                events: action.payload,
                loading: false
            }
        case 'fetch_workshops':
            return {
                ...state,
                workshops: action.payload,
                loading: false
            }
        case 'set_loading':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

const fetchEvents = dispatch => async () => {
    try {
        dispatch({ type: 'set_loading' })
        const response = await fetch(`${process.env.DOMAIN}/api/events`, { next: { revalidate: 3600 } })
        const resData = await response.json()
        dispatch({ type: 'fetch_events', payload: resData?.events })
    } catch (err) {
        console.error('somethng went wrong')
    }
}

const fetchWorkshops = dispatch => async () => {
    try {
        dispatch({ type: 'set_loading' })
        const response = await fetch(`${process.env.DOMAIN}/api/workshops`, { next: { revalidate: 3600 } })
        const resData = await response.json()
        dispatch({ type: 'fetch_workshops', payload: resData?.workshops })
    } catch (err) {
        console.error('somethng went wrong')
    }
}

export const { Provider, Context } = createDataContext(dataReducer, { fetchEvents, fetchWorkshops }, { events: [], workshops: [], loading: false })