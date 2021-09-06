import { NOTES } from '../Types';
export const notes = payload => {
    return {
        type: NOTES,
        payload: payload
    }
};