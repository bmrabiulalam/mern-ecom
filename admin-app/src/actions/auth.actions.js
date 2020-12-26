import { authConstants } from "./constants"

export const login = (user) => {

    console.log(user);

    return async (dispatch) => {
        dispatch({
            type: authConstants,
            payload: {
                ...user
            }
        })
    }
}