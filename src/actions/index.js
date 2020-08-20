export const ACTIONS = {
    UPDATE_VALUE: 'update-value',
    CLEAR_ALL: 'clear-all'
}

export const updateInput = (obj, value) => {
    let payloadObj = {}
    payloadObj[obj] = value
    return {
        type: ACTIONS.UPDATE_VALUE,
        payload: payloadObj
    }
}

export const clearAllInputs = () => {
    return {
        type: ACTIONS.CLEAR_ALL
    }
}