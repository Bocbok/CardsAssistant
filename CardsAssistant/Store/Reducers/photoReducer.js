import getPoints from '../utils/apiCalls'

const initialState= {
    jeuSrc: "",
    nbPoints: undefined
}

function takePhoto(state = initialState, action){
    let nextState
    switch (action.type){
        case 'PHOTO_TAKEN':
            const nbPoints = getPoints(action.value)
            nextState = {
                ...state,
                jeuSrc: action.value,   
                nbPoints: nbPoints
            }
            return nextState || state
        default:
            return state
    }
}

export default takePhoto