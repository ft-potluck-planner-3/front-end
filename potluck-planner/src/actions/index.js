export const ADD_POTLUCK = "ADD_POTLUCK";

export function addPotluck(newPotluck) {
    return {
        type: ADD_POTLUCK,
        payload: newPotluck
    }
}