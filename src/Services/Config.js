import { store } from '../Redux/index';
export const getToken = () => {
    return (`Bearer ${store.getState().Auth.user?.token}`)
}
export const getApiKey = () => {
    return (store.getState().Auth.user?.apiKey)
}