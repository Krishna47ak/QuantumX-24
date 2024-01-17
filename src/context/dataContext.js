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
        case 'verify_event':
            return {
                ...state,
                events: state.events?.map((event) => event.applicantId === action.payload ? { ...event, verified: true } : event),
                loading: false
            }
        case 'verify_workshop':
            return {
                ...state,
                workshops: state.workshops?.map((workshop) => workshop.applicantId === action.payload ? { ...workshop, verified: true } : workshop),
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

const verifyEvent = dispatch => async ({ applicantId }) => {
    const body = JSON.stringify({ applicantId })
    try {
        dispatch({ type: 'set_loading' })
        await fetch(`${process.env.DOMAIN}/api/verify-event`, {
            method: "POST",
            body,
            headers: { 'Content-Type': 'application/json' }
        });
        dispatch({ type: 'verify_event', payload: applicantId })
    } catch (err) {
        console.error('somethng went wrong')
    }
}

const verifyWorkshop = dispatch => async ({ applicantId }) => {
    const body = JSON.stringify({ applicantId })
    try {
        dispatch({ type: 'set_loading' })
        await fetch(`${process.env.DOMAIN}/api/verify-workshop`, {
            method: "POST",
            body,
            headers: { 'Content-Type': 'application/json' }
        });
        dispatch({ type: 'verify_workshop', payload: applicantId })
    } catch (err) {
        console.error('somethng went wrong')
    }
}

export const { Provider, Context } = createDataContext(dataReducer, { fetchEvents, fetchWorkshops, verifyEvent, verifyWorkshop }, { events: [], workshops: [], loading: false })